<template>
  <div class="main-layout">
    <Progressbar />
    <RouterLinks />
    <RouterView />
  </div>
</template>

<script>
import '@/scss/index.scss'
import Progressbar from '@/components/data-display/Progressbar'
import RouterLinks from '@/components/data-display/RouterLinks'

export default {
  name: 'MainLayout',
  components: {RouterLinks, Progressbar}
}
</script>

<style scoped lang="scss">
.main-layout {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
