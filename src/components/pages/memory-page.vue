<template>
  <div class="memory-page">
    <div v-if="!state.isReady" class="memory-page__slider-wrapper">
      <div class="memory-page__slider-title">Difficulty</div>
      <CustomSlider
          v-model="state.cells"
          class-name="memory-page__slider"
          :adsorb="true"
          :marks="[36, 64, 100]"
          :min="36"
          :max="100"
      />
    </div>

    <div v-if="!state.isEnd" :style="{width: fieldDimension() + 'px', height: fieldDimension() + 'px'}" class="memory-page__cards-wrapper">
      <div class="memory-page__stopwatch-ingame">{{ stopwatch }}</div>
      <transition-group
          v-bind:css="false"
          v-on:before-enter="transition.beforeEnter"
          v-on:enter="transition.enter"
          v-on:leave="transition.leave"
      >
        <MemoryCard
            @click="handleCard(index, realIndex)"
            class="memory-page__card"
            :data-index="index"
            :key="realIndex"
            v-for="(index, realIndex) in state.shuffledCells"
            :is-revealed="state.pending[realIndex] === index || state.isSteady"
            :is-unlocked="state.revealed[realIndex] === index"
        />
      </transition-group>
      <div class="memory-page__btn-group">
        <button @click="testing">qweqwe</button>
        <button @click="ready">rdy</button>
        <button @click="endgame">end</button>
      </div>
    </div>
    <div v-if="state.isEnd" class="memory-page__enter-nickname-wrapper">
      <CustomInput
          class-name="memory-page__endgame-input"
          :value="state.nickName"
          placeholder="Nickname"
      />
      <div class="memory-page__score">Your score is: {{stopwatch}}!</div>
    </div>
  </div>
</template>

<script>
import MemoryCard from "@/components/memory-components/memory-card";
import CustomSlider from "@/components/input-components/custom-slider";
import "velocity-animate/velocity.ui.min.js";
import { computed, onMounted, reactive, watch } from "vue";
import CustomInput from "@/components/input-components/custom-input";

export default {
  name: "MemoryPage",
  components: { CustomInput, CustomSlider, MemoryCard },
  setup() {
    const state = reactive({
      isReady: false,
      isSteady: false,
      isPlay: false,
      isEnd: false,
      cells: 36,
      shuffledCells: [],
      revealed: {},
      pending: {},
      stopwatch: 0,
      stopwatchInstance: null,
      cardTimerFirst: null,
      cardTimerSecond: null,
      nickName: null
    });

    onMounted(() => {
      _init();
    });

    watch(
        () => state.cells,
        () => _handleCellsCountChanging()
    );

    watch(
        () => state.isPlay,
        () => state.isPlay && !state.isEnd ? _stopwatches.start() : _stopwatches.stop()
    );

    const _stopwatches = {
      start: () => state.stopwatchInstance = setInterval(() => state.stopwatch += 1000, 1000),
      stop: () => clearInterval(state.stopwatchInstance)
    }

    const transition = {
      beforeEnter: (el) => {el.style.opacity = 0;el.style.height = 0},
      enter: (el, done) => setTimeout(() => Velocity(el, { opacity: 1, height: "48px" }, { complete: done }), Number(el.dataset.index)),
      leave: (el, done) => setTimeout(() => Velocity(el, { opacity: 0, height: 0 }, { complete: done }), Number(el.dataset.index))
    };

    const ready = () => {
      state.isReady = true;
      state.isSteady = true;
      setTimeout(() => {
        state.isSteady = false;
        state.isPlay = true;
      }, 5000);
    };

    const fieldDimension = () => Math.sqrt(state.cells) * 48 + Math.sqrt(state.cells) * 4;

    /**
     * @param index {number} pair index
     * @param realIndex {number} overall index in field
     */
    const handleCard = (index, realIndex) => {
      if (_isCardBlocked(index, realIndex)) return;
      _handlePendingCards(index, realIndex);
    };


    const stopwatch = computed( () => {
      const date = new Date(null);
      date.setSeconds(state.stopwatch / 1000);
      const utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    })


    const _init = () => _makeShuffledField();

    const _handleCellsCountChanging = () => {
      _makeShuffledField();
      fieldDimension();
    };

    const _makeShuffledField = () => {
      Promise.resolve(_setFieldLayout())
          .then(arr => {
            //assigning value to shuffledField in the same block because arr.sort doesn't have a callback but it's synchronous
            arr.sort(() => Math.random() - 0.5);
            state.shuffledCells = arr;
          });
    };

    const _setFieldLayout = () => {
      const generatedArray = [];
      for (let i = 0; i < state.cells / 2; i++) {
        //doubling cards
        generatedArray.push(i);
        generatedArray.push(i);
      }
      return generatedArray;
    };

    const _handlePendingCards = (index, realIndex) => {
      //clearing timeouts to avoid collision
      clearTimeout(state.cardTimerFirst);
      clearTimeout(state.cardTimerSecond);

      //marking card as temporary
      state.pending[realIndex] = index;

      if (Object.keys(state.pending).length > 2) state.pending = {};
      state.cardTimerFirst = setTimeout(() => delete state.pending[realIndex], 5000);
      const hasPair = Object.keys(state.pending).every(card => state.pending[card] === index) && Object.keys(state.pending).length >= 2;

      //two revealed cards are the similar
      if (hasPair) {
        state.revealed = { ...state.pending, ...state.revealed };
        state.pending = {};
        if (Object.keys(state.revealed).length === state.shuffledCells.length) endgame()
        //or aren't...
      } else if (Object.keys(state.pending).length >= 2) {
        state.cardTimerSecond = setTimeout(() => state.pending = {}, 700);
      }
    };

    const _isCardBlocked = (index, realIndex) => {
      return (
          state.revealed[realIndex] === index ||
          state.pending[realIndex] === index ||
          state.isSteady ||
          !state.isReady
      );
    };

    const endgame = () => {
      state.isEnd = true;
      state.isPlay = false;
    }

    const testing = () => {
      console.log(state.revealed, "state.revealed");
      console.log(state.pending, "state.pending");
      console.log(state.cells, "state.cells");
      console.log(state.shuffledCells, "state.shuffledCells");
      console.log(state, 'state')
    };

    return {
      endgame,
      fieldDimension,
      handleCard,
      ready,
      state,
      stopwatch,
      testing,
      transition,
    };
  }
};
</script>

<style scoped lang="scss">
.memory-page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 100%;
  width: 100%;
  position: relative;
  padding: 24px;

  &__cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 50px;
  }

  &__slider-wrapper {
    width: 20%;
    margin-right: 3vw;
  }

  &__slider-title {
    font-size: 24px;
    margin-bottom: 12px;
    text-align: center;
  }

  &__stopwatch-ingame {
    position: absolute;
    z-index: 1;
    top: 50px;
    text-align: center;
  }

  &__score {
    text-align: center;
    font-size: 18px;
    line-height: 100%;
    margin: 8px 0;
  }
}
</style>
