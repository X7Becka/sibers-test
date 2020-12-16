<template>
  <div
    class="memory-stopwatch"
    :class="className"
  >
    {{ renderStopwatch }}
  </div>
</template>

<script>
import {computed, reactive} from 'vue'

export default {
  name: 'MemoryStopwatch',
  props: {
    className: {
      type: String,
      default: ""
    },
    value: {
      type: Number,
      default: () => 0
    }
  },
  setup(props) {
    const state = reactive({
      value: 0
    })

    //function that converts milliseconds to 00:00:00 format
    const renderStopwatch = computed(() => {
      const date = new Date(null)
      date.setSeconds(props.value / 1000)
      const utc = date.toUTCString()
      return utc.substr(utc.indexOf(':') - 2, 8)
    })

    return {
      renderStopwatch, state
    }
  }
}
</script>
