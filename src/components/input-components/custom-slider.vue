<template>
<VueSlider
    class="custom-slider"
    :class="className"
    :adsorb="adsorb"
    :interval="interval"
    :data="data"
    :marks="marks"
    :included="true"
    :min="min"
    :max="max"
/>
</template>

<script>
import VueSlider from "vue-slider-component"
export default {
  name: "CustomSlider",
  components: {VueSlider},
  props: {
    className: {
      type: String,
      default: "",
      required: true
    },
    adsorb: {
      type: Boolean,
      default: false,
    },
    interval: {
      type: Number,
      default: 1
    },
    data: {
      type: Object,
      required: false,
      default: null
    },
    marks: {
      type: Array
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    }

  },
  setup(props) {
    const state = {
      value: 0
    }
  return {state}
  }
};
</script>

<style lang="scss">
.custom-slider {
  /* component style */
  .vue-slider-disabled .vue-slider-rail {
    background-color: #ccc;
  }

  .vue-slider-disabled .vue-slider-dot-handle {
    background-color: #666;
  }

  .vue-slider-disabled .vue-slider-process {
    background-color: #666;
  }

  .vue-slider-disabled .vue-slider-mark-step {
    background-color: #666;
  }

  .vue-slider-disabled .vue-slider-mark-step-active {
    background-color: #ccc;
  }

  /* rail style */
  .vue-slider-rail {
    background-color: var(--lighter-text);
    border-radius: 15px;
  }

  /* process style */
  .vue-slider-process {
    background-color: var(--main-text);
    border-radius: 15px;
  }

  /* mark style */
  .vue-slider-mark {
    z-index: 4;
  }

  .vue-slider-mark-step {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: var(--main-text);
  }

  .vue-slider-mark-step-active {
    background-color: var(--lighter-text);
  }

  .vue-slider-mark-label {
    font-size: 14px;
    white-space: nowrap;
  }

  /* dot style */
  .vue-slider-dot-handle {
    cursor: pointer;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: var(--main-text);
    box-sizing: border-box;
  }

  .vue-slider-dot-handle::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 200%;
    height: 200%;
    background-color: rgb(127, 238, 0, 0.4);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    z-index: -1;
    transition: transform 0.2s;
  }

  .vue-slider-dot-handle-focus::after {
    transform: translate(-50%, -50%) scale(1);
  }

  .vue-slider-dot-handle-disabled {
    cursor: not-allowed;
    background-color: #666 !important;
  }

  .vue-slider-dot-tooltip {
    visibility: visible;
  }

  .vue-slider-dot-tooltip-show .vue-slider-dot-tooltip-inner {
    opacity: 1;
  }

  .vue-slider-dot-tooltip-show .vue-slider-dot-tooltip-inner-top {
    transform: rotateZ(-45deg);
  }

  .vue-slider-dot-tooltip-show .vue-slider-dot-tooltip-inner-bottom {
    transform: rotateZ(135deg);
  }

  .vue-slider-dot-tooltip-show .vue-slider-dot-tooltip-inner-left {
    transform: rotateZ(-135deg);
  }

  .vue-slider-dot-tooltip-show .vue-slider-dot-tooltip-inner-right {
    transform: rotateZ(45deg);
  }

  .vue-slider-dot-tooltip-inner {
    border-radius: 50% 50% 50% 0;
    background-color: var(--main-text);
    opacity: 0;
    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.2s linear;
  }

  .vue-slider-dot-tooltip-inner-top {
    transform: translate(0, 50%) scale(0.01) rotate(-45deg);
  }

  .vue-slider-dot-tooltip-inner-bottom {
    transform: translate(0, -50%) scale(0.01) rotateZ(135deg);
  }

  .vue-slider-dot-tooltip-inner-left {
    transform: translate(50%, 0) scale(0.01) rotateZ(-135deg);
  }

  .vue-slider-dot-tooltip-inner-right {
    transform: translate(-50%, 0) scale(0.01) rotateZ(45deg);
  }

  .vue-slider-dot-tooltip-text {
    font-size: 12px;
    white-space: nowrap;
    text-align: center;
    color: #fff;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
  }

  .vue-slider-dot-tooltip-inner-top .vue-slider-dot-tooltip-text {
    transform: rotateZ(45deg);
  }

  .vue-slider-dot-tooltip-inner-bottom .vue-slider-dot-tooltip-text {
    transform: rotateZ(-135deg);
  }

  .vue-slider-dot-tooltip-inner-left .vue-slider-dot-tooltip-text {
    transform: rotateZ(135deg);
  }

  .vue-slider-dot-tooltip-inner-right .vue-slider-dot-tooltip-text {
    transform: rotateZ(-45deg);
  }
}
</style>
