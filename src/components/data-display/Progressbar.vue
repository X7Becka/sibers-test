<template>
  <div class="progressbar">
    <div :class="state" class="progressbar__state" />
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {onMounted, ref} from 'vue'
export default {
  name: 'Progressbar',
  setup() {
    const store = useStore()
    const state = ref('done')
    onMounted(() => {
      _init()
    })

    const _init = () => {
      store.subscribe(mutation => {
        if (mutation.type === 'PROGRESSBAR/SET_PROGRESS_STATUS')
          state.value = mutation.payload
      })
    }
    return {state}
  }
}
</script>

<style scoped lang="scss">
.progressbar {
  z-index: 999999999999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: transparent;

  &__state {
    width: 0;
    height: 100%;
    background-color: var(--main-text);

    &.loading {
      animation: progress-90 5s ease;
      animation-fill-mode: forwards;
    }

    &.done {
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
