<template>
  <div :class="className" class="contact">
    <div class="contact__layout">
      <div class="contact__avatar-wrapper">
        <img
          class="contact__avatar"
          src="https://advanced-television.com/wp-content/uploads/2020/10/Borat.jpg"
          alt="borat"
        />
      </div>
      <div class="contact__info-wrapper">
        <div class="contact__info-main">
          <div class="contact__name">Name: {{ contact.name }}</div>
          <div class="contact__username">Username: {{ contact.username }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "contact",
  props: {
    className: {
      type: String,
      default: "",
      required: true
    },
    contact: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  setup(props) {}
};
</script>

<style scoped lang="scss">
.contact {
  height: 80px;
  border-radius: 32px;
  &__layout {
    display: flex;
    overflow: hidden;
    flex-direction: row;
    border-radius: 32px;
    box-shadow: 0 0 4px 0 var(--main-text);
    cursor: pointer;
    height: 64px;
    @include transition(box-shadow);

    @media (hover) {
      &:hover {
        box-shadow: 0 0 8px 0 var(--main-text);
      }
    }
  }

  &__avatar-wrapper {
    width: 20%;
    background-color: #292a2d;
  }

  &__avatar {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border-radius: 100%;
    display: flex;
  }

  &__info-wrapper {
    width: 80%;
    padding: 8px;
    background-color: #292a2d;
    overflow: hidden;
  }

  &__info-main {
    font-size: 12px;
    line-height: 100%;
  }
}
</style>
