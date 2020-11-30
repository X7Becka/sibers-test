<template>
  <div>
    <div :class="className" class="contacts-block">
      <div class="contacts-block__filters-wrapper">
        <CustomInput
          alt="Filter by username"
          placeholder="Filter by username"
          v-model="state.inputName"
          :keyup="() => filterByName()"
          :value="state.inputName"
          class-name="contacts-block__filter-input"
        />
      </div>
      <transition-group
        tag="div"
        :css="false"
        v-on:before-enter="beforeEnter"
        v-on:enter="onEnter"
        v-on:leave="onLeave"
      >
        <Contact
          :data-index="contact.id"
          :key="contact.id"
          v-for="contact in state.contacts"
          class-name="contacts-block__contact"
          :contact="contact"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, computed, reactive, watch } from "vue";
import "velocity-animate/velocity.ui.min.js"; //using velocityJS animations to get stable tick by frame. Library uses requestAnimationFrame() native js method
import Contact from "@/components/contacts-components/contact";
import CustomInput from "@/components/input-components/custom-input";

export default {
  name: "ContactsBlock",
  components: { CustomInput, Contact },
  props: {
    className: {
      type: String,
      default: "",
      required: true
    },
    contacts: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  setup(props, context) {
    const state = reactive({
      contacts: props.contacts,
      inputName: ""
    });

    watch(
      () => props.contacts,
      () => {
        //using vueJS hook "watch" to be sure we'll get the props.
        filterByName(); //No need to block page till we get data-array
        console.log(state.contacts, "props.contacts WATCH");
      }
    );

    const filterByName = () => {
      console.log(state, "state");
      state.contacts = props.contacts.filter(contact => {
        return (
          contact.username
            .toLowerCase()
            .indexOf(state.inputName.toLowerCase()) !== -1
        );
      });
    };

    const beforeEnter = el => {
      el.style.height = "0";
    };
    const onEnter = (el, done) => {
      Velocity(el, { height: "80px" }, { complete: done });
    };
    const onLeave = (el, done) => {
      Velocity(el, { height: 0 }, { complete: done });
    };

    return { state, filterByName, beforeEnter, onEnter, onLeave };
  }
};
</script>

<style scoped lang="scss">
$filters-height: 48px;

.contacts-block {
  padding: 16px;
  margin-top: $filters-height;
  height: calc(100vh - #{$filters-height});
  overflow: scroll;
  position: relative;

  &__filters-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 30%;
    height: $filters-height;
    background-color: #373737;
    display: flex;
    align-items: center;
  }

  &__filter-input {
    margin: 0 0 0 16px;
  }
}
</style>
