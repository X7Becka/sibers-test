<template>
  <div :data-index="dataIndex" class="memory-card">
    <div class="memory-card__wrapper" :class="cardCondition()">
      <img
          @load.once="handleLoadingState.done()"
          :src="getImage()"
          class="memory-card__face"
      />
      <img
          :src="Flop"
          class="memory-card__flop"
      />
      <div class="memory-card__progress-wrapper">
        <div class="memory-card__progress" :class="{'memory-card__progress--loading': state.isLoading, 'memory-card__progress--done': !state.isLoading}" />
      </div>
    </div>
  </div>
</template>

<script>
import Flop from "../../../src/assets/image/memory/flop.png";
import { reactive } from "vue";

export default {
  name: "memory-card",
  props: {
    dataIndex: Number,
    isRevealed: Boolean,
    isUnlocked: Boolean,
    imagesCounter: Function
  },
  setup(props) {
    const state = reactive({
      isLoading: null
    });

    const getImage = () => {
      if (props.isRevealed) {
        if (state.isLoading === null) handleLoadingState.loading();

        /** @const props.dataIndex {number} **/
        return `https://i.pravatar.cc/64?img=${props.dataIndex}/`;
      }
    };

    const handleLoadingState = {
      loading: () => state.isLoading = true,
      done: () => {
        state.isLoading = false;
        props.imagesCounter();
      }
    };

    const cardCondition = () => {
      if (props.isRevealed) return "memory-card__wrapper--revealed";
      if (props.isUnlocked) return "memory-card__wrapper--unlocked";
    };

    return {
      getImage,
      Flop,
      cardCondition,
      state,
      handleLoadingState
    };
  }
};
</script>

<style scoped lang="scss">
.memory-card {
  perspective: 1000px;

  &__wrapper {
    position: relative;
    width: 48px;
    height: 48px;
    @include transition(transform opacity);
    transform-style: preserve-3d;

    &--revealed {
      transform: rotateY(180deg);
    }

    &--unlocked {
      opacity: 0;
    }
  }

  &__face {
    width: 100%;
    height: 100%;
    background-color: transparent;
    @include transition();
    transform-style: preserve-3d;
    backface-visibility: hidden;
    transform: rotateY(180deg);
  }

  &__flop {
    transform: rotateY(0);
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    position: absolute;
    right: 0;
    top: 0;
  }

  &__progress-wrapper {
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: transparent;
    transform: rotateY(180deg);
  }

  &__progress {
    width: 0;
    height: 100%;
    background-color: var(--main-text);

    &--loading {
      animation: progress-90 5s ease;
      animation-fill-mode: forwards;
    }

    &--done {
      animation: progress-100 0.2s ease;
    }
  }

  @keyframes progress-90 {
    0% {
      opacity: 1;
      width: 0;
    }

    100% {
      width: 90%;
      opacity: 1;
    }
  }

  @keyframes progress-100 {
    0% {
      width: 90%;
    }

    100% {
      width: 100%;
      opacity: 0;
    }
  }
}
</style>
