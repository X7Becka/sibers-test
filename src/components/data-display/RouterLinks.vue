<template>
  <div class="router-links">
    <div class="router-links__wrapper">
      <RouterLink
        v-for="(value, key, i) in pages"
        :key="i"
        class="router-links__link"
        :to="{name: value}"
      >
        {{ key }}
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RouterLinks',
  setup() {
    const pages = {
      Memory: 'Memory',
      Contacts: 'Contacts'
    }
    return {pages}
  }
}
</script>

<style scoped lang="scss">
.router-links {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 48px;
  display: flex;
  justify-content: center;
  z-index: 10;

  &:hover {
    .router-links__wrapper {
      transform: translateY(0);
    }
  }

  &__wrapper {
    transform: translateY(-45px);
    border-radius: 0 0 8px 8px;
    height: 48px;
    box-shadow: 0 0 4px 0 var(--main-text);
    display: flex;
    align-items: center;
    @include transition(transform);
  }

  &__link {
    margin: 0 16px;
    font-size: 14px;
    color: var(--main-text);
    line-height: 100%;
    text-decoration: none;

    &.router-link-active {
      color: #fff;
      text-decoration: underline;
    }
  }
}
</style>
