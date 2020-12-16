<template>
  <div class="memory-page">
    <MemoryScoreboard :data="state.scores" />
    <div
      v-if="!gameState.isReady"
      class="memory-page__slider-wrapper"
    >
      <div class="memory-page__slider-title">
        Difficulty
      </div>

      <!--Range slider-->
      <CustomSlider
        v-model="state.cells"
        :adsorb="true"
        :marks="[36, 64, 100]"
        :min="36"
        :max="100"
        class-name="memory-page__slider"
      />
    </div>

<!--    field wrapper that dimension bases on cards amount-->
    <div
      v-if="!gameState.isEnd"
      :style="{
        width: state.fieldDimension + 'px',
        height: state.fieldDimension + 'px',
      }"
      class="memory-page__cards-wrapper"
    >
      <!--        stopwatch render component-->
      <MemoryStopwatch
        :key="1"
        ref="stopwatch"
        class-name="memory-page__stopwatch-ingame"
        :value="state.stopwatchValue"
      />
      <transition-group
        :css="false"
        @before-enter="transition.beforeEnter"
        @enter="transition.enter"
        @leave="transition.leave"
      >
        <!--        playing card item render component-->
        <MemoryCard
          v-for="(index, realIndex) in state.shuffledCells"
          :key="realIndex"
          class="memory-page__card"
          :data-index="index"
          :is-revealed="state.pending[realIndex] === index || gameState.isSteady"
          :is-unlocked="state.revealed[realIndex] === index"
          :images-counter="loadingImagesCounter"
          @click="handleCard(index, realIndex)"
        />
      </transition-group>
      <div class="memory-page__btn-group">
        <button
          v-if="!gameState.isReady"
          @click="ready"
        >
          ready
        </button>
        <!--        <button @click="getState">-->
        <!--          state-->
        <!--        </button>-->
      </div>
    </div>
    <div
      v-if="gameState.isEnd"
      class="memory-page__enter-nickname-wrapper"
    >
      <CustomInput
        v-model="state.nickName"
        :value="state.nickName"
        class-name="memory-page__endgame-input"
        placeholder="Nickname"
      />
      <div class="memory-page__score">
        Your score is:

        <!--        stopwatch render component-->
        <MemoryStopwatch
          :key="1"
          ref="stopwatch"
          :value="state.stopwatchValue"
        />
        !
      </div>
      <button
        v-if="!gameState.isSubmitted"
        @click="submitScores"
      >
        submit
      </button>
    </div>
  </div>
</template>

<script>
import MemoryCard from "@/components/pages/memory/MemoryCard"
import CustomSlider from "@/components/inputs/CustomSlider"
import "velocity-animate/velocity.ui.min.js"
import {onMounted, reactive, watch} from "vue"
import CustomInput from "@/components/inputs/CustomInput"
import {useStore} from "vuex"
import MemoryScoreboard from "@/components/pages/memory/MemoryScoreboard"
import MemoryStopwatch from "@/components/pages/memory/MemoryStopwatch"

export default {
  name: "MemoryPage",
  components: {MemoryStopwatch, MemoryScoreboard, CustomInput, CustomSlider, MemoryCard},
  setup() {
    const store = useStore()
    const state = reactive({
      cells: 36,
      loadedImages: 0,
      shuffledCells: [],
      revealed: {},
      pending: {},
      fieldDimension: 0,
      cardTimerFirst: null,
      cardTimerSecond: null,
      stopwatch: undefined,
      stopwatchValue: 0,
      nickName: null,
      scores: store.state["MEMORY/scores"]
    })

    const gameState = reactive({
      isReady: false,
      isSteady: false,
      isPlay: false,
      isEnd: false,
      isSubmitted: false
    })

    onMounted(() => {
      _init()
    })

    watch(
      () => state.cells,
      () => _handleCellsCountChanging()
    )

    watch(
      () => gameState.isPlay,
      () =>
        gameState.isPlay && !gameState.isEnd
          ? _stopwatchMethods.start()
          : _stopwatchMethods.stop()
    )

    watch(
      () => state.loadedImages,
      () => {
        if (state.loadedImages === state.cells) {
          setTimeout(() => {
            gameState.isSteady = false
            gameState.isPlay = true
          }, 5000)
        }
      }
    )

    const _stopwatchMethods = {
      start: () => state.stopwatch = setInterval(
        () => state.stopwatchValue += 1000, 1000
      ),
      stop: () => clearInterval(state.stopwatch)
    }

    const transition = {
      beforeEnter: (el) => {
        el.style.opacity = 0
        el.style.height = 0
      },
      enter: (el, done) =>
        setTimeout(
          () => Velocity(el, {opacity: 1, height: "48px"}, {complete: done}),
          Number(el.dataset.index)
        ),
      leave: (el, done) =>
        setTimeout(
          () => Velocity(el, {opacity: 0, height: 0}, {complete: done}),
          Number(el.dataset.index)
        )
    }

    const loadingImagesCounter = () => {
      state.loadedImages++
    }

    const recalculateFieldDimension = () => {
      state.fieldDimension = Math.sqrt(state.cells) * 48 + Math.sqrt(state.cells) * 4
    }

    /**
     * @param index {number} pair index
     * @param realIndex {number} overall index in field
     */
    const handleCard = (index, realIndex) => {
      if (_isCardBlocked(index, realIndex)) return
      _handlePendingCards(index, realIndex)
    }

    const submitScores = () => {
      store.dispatch("MEMORY/SUBMIT_SCORES", {
        nickname: state.nickName,
        score: state.stopwatchValue
      })
        .then(() => gameState.isSubmitted = true)
        .then(() => _fetchScores())
        .catch(() => console.log("Something went wrong while we tried to submit your scores!"))
    }

    const _init = () => {
      _makeShuffledField()
      recalculateFieldDimension()
      _fetchScores()
    }

    const _handleCellsCountChanging = () => {
      _makeShuffledField()
      recalculateFieldDimension()
    }

    const _makeShuffledField = () => {
      const fieldArray = _setFieldLayout()
      fieldArray.sort(() => Math.random() - 0.5)
      state.shuffledCells = fieldArray
    }

    const _fetchScores = () => {
      store.dispatch("MEMORY/FETCH_SCORES")
        .then(() => (state.scores = store.getters["MEMORY/GET_SCORES"]))
    }

    const _setFieldLayout = () => {
      const generatedArray = []
      for (let i = 0; i < state.cells / 2; i++) {
        //doubling cards
        generatedArray.push(i)
        generatedArray.push(i)
      }
      return generatedArray
    }

    const _handlePendingCards = (index, realIndex) => {
      //clearing timeouts to avoid collision
      clearTimeout(state.cardTimerFirst)
      clearTimeout(state.cardTimerSecond)

      //marking card as temporary
      state.pending[realIndex] = index

      if (Object.keys(state.pending).length > 2) state.pending = {}
      state.cardTimerFirst = setTimeout(
        () => delete state.pending[realIndex],
        5000
      )
      const hasPair = Object.keys(state.pending).every(card =>
        state.pending[card] === index
      ) && Object.keys(state.pending).length >= 2

      //two revealed cards are the similar
      if (hasPair) {
        state.revealed = {...state.pending, ...state.revealed}
        state.pending = {}
        if (Object.keys(state.revealed).length === state.shuffledCells.length) _end()

        //or aren't...
      } else if (Object.keys(state.pending).length >= 2)
        state.cardTimerSecond = setTimeout(() => (state.pending = {}), 700)
    }

    const _isCardBlocked = (index, realIndex) => {
      return (
        state.revealed[realIndex] === index ||
        state.pending[realIndex] === index ||
        gameState.isSteady ||
        !gameState.isReady
      )
    }

    const ready = () => {
      gameState.isReady = true
      gameState.isSteady = true
    }

    const _end = () => {
      gameState.isEnd = true
      gameState.isPlay = false
    }

    return {
      state,
      gameState,
      transition,
      handleCard,
      loadingImagesCounter,
      ready,
      recalculateFieldDimension,
      submitScores,
    }
  }
}
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
    margin: 8px 4px 8px 0;
    display: flex;
  }
}
</style>
