<template>
  <div class="memory-scoreboard">
    <div class="memory-scoreboard__wrapper">
      <div class="memory-scoreboard__title">Leaderboard</div>
      <div v-for="item in data" :key="item.id" class="memory-scoreboard__item">
        <span class="memory-scoreboard__nickname">
          {{ item.id }}. {{ item.nickname }}:
        </span>
        <span class="memory-scoreboard__score">{{
          renderScores(item.score)
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemoryScoreboard',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const renderScores = score => {
      const date = new Date(null)
      console.log(score, 'score')
      date.setSeconds(score / 1000)
      const utc = date.toUTCString()
      return utc.substr(utc.indexOf(':') - 2, 8)
    }

    return {
      renderScores
    }
  }
}
</script>

<style scoped lang="scss">
.memory-scoreboard {
  position: absolute;
  left: 24px;
  top: 24px;

  &__title {
    font-size: 28px;
    line-height: 100%;
    margin-bottom: 12px;
  }

  &__item {
    display: flex;
    flex-direction: row;
    padding-left: 36px;
    margin-bottom: 4px;
  }

  &__nickname {
    margin-right: 12px;
  }

  &__score {
    margin-left: auto;
  }
}
</style>
