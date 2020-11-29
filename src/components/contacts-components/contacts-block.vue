<template>
  <div>
    <div :class="className" class="contacts-block">
      <div class="contacts-block__filters-wrapper">
        <input class="contacts-block__input" v-on:keyup="() => filterByName()" v-model="state.inputName" type="text" name="filter"/>
      </div>
      <transition-group name="contacts-block__contact-" duration="1000" tag="div">
        <Contact v-bind:key="contact.id" v-for="contact in state.contacts" class-name="contacts-block__contact" :contact="contact" />
      </transition-group>

    </div>
  </div>
</template>

<script>
import { onMounted, ref, computed, reactive, watch } from "vue";
import Contact from "@/components/contacts-components/contact";

export default {
  name: "Contacts",
  components: { Contact },
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
      inputName: null
    })

    watch(() => props.contacts, () => {
      filterByName()
      console.log(state.contacts, 'props.contacts WATCH')
    })

    const filterByName = () => {
      state.contacts = props.contacts.filter(contact => {
           return state.inputName ? contact.username.toLowerCase().includes(state.inputName) : props.contacts
        })
    }

    return {state, filterByName}
  }
};
</script>

<style scoped lang="scss">
.contacts-block {
  padding: 16px;
  margin-top: 48px;
  height: 100vh;
  overflow: scroll;
  position: relative;

  &__filters-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 30%;
    height: 48px;
    background-color: #373737;
  }

  &__contact {
    transform: scale(1);
    &--item {

    }
    &--enter-active, &--leave-active {
      transition: all 1s;
    }
    &--enter, &--leave-to {
      transform: scale(0);
    }
  }
}
</style>
