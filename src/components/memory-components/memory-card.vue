<template>
  <div :data-index="dataIndex" class="memory-card">
    <div class="memory-card__wrapper" :class="cardCondition()">
      <img :src="isRevealed ? getImage() : ' '" class="memory-card__face" />
      <img :src="Flop" class="memory-card__flop" />
    </div>
  </div>
</template>

<script>
import Flop from "../../../src/assets/image/memory/flop.png";

export default {
  name: "memory-card",
  props: {
    dataIndex: Number,
    isRevealed: Boolean,
    isUnlocked: Boolean
  },
  setup(props) {
    const getImage = () => {
      /** @const props.dataIndex {number} **/
      return `https://i.pravatar.cc/64?img=${props.dataIndex}/`
    };

    const cardCondition = () => {
      if (props.isRevealed) return 'memory-card__wrapper--revealed'
      if (props.isUnlocked) return 'memory-card__wrapper--unlocked'
    }

    return { props, getImage, Flop, cardCondition };
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
    background-color: #FFF;
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
}
</style>
