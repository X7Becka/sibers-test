<template>
  <div :class="className" class="contacts-list">
    <div class="contacts-list__filters-wrapper">
      <CustomInput
        v-model="state.inputName"
        alt="Filter by username"
        placeholder="Filter by username"
        :keyup="filterByName"
        :value="state.inputName"
        class-name="contacts-list__filter-input"
      />
    </div>
    <transition-group
      tag="div"
      :css="false"
      class="contacts-list__contacts-wrapper"
      @before-enter="transition.beforeEnter"
      @enter="transition.onEnter"
      @leave="transition.onLeave"
    >
      <Contact
        v-for="contact in state.filteredContacts"
        :key="contact?.id"
        :data-index="contact?.id"
        class-name="contacts-list__contact"
        :contact="contact"
        @click="editContact(contact?.id)"
      />
    </transition-group>
  </div>
</template>

<script>
import {computed, onMounted, reactive} from 'vue'
import 'velocity-animate/velocity.ui.min.js' //using velocityJS animations to get stable tick by frame. Library uses requestAnimationFrame() native js method
import Contact from '@/components/pages/contacts/Contact'
import CustomInput from '@/components/inputs/CustomInput'
import {useStore} from 'vuex'

export default {
  name: 'ContactsList',
  components: {CustomInput, Contact},
  props: {
    className: {
      type: String,
      default: '',
      required: true
    }
  },
  setup() {
    const store = useStore()
    const state = reactive({
      contacts: [],
      filteredContacts: [],
      inputName: ''
    })

    onMounted(() => {
      _init()
    })

    const _init = () => {
      _getContacts()
    }

    const _getContacts = () => {
      store
        .dispatch('CONTACTS/LOAD_CONTACTS')
        .then(() => (state.contacts = store.getters['CONTACTS/GET_CONTACTS']))
        .then(() => filterByName)
    }

    const filterByName = computed(() => {
      state.filteredContacts = state.contacts.filter(contact => {
        return (
          contact.username
            .toLowerCase()
            .indexOf(state.inputName.toLowerCase()) !== -1
        )
      })
    })

    const editContact = i => {
      store.dispatch('CONTACTS/GET_CONTACT_TO_EDIT', i)
    }

    const transition = {
      beforeEnter: el => (el.style.height = '0'),
      onEnter: (el, done) => Velocity(el, {height: '80px'}, {complete: done}),
      onLeave: (el, done) => Velocity(el, {height: 0}, {complete: done})
    }

    return {
      state,
      filterByName,
      transition,
      editContact
    }
  }
}
</script>

<style scoped lang="scss">
$filters-height: 48px;

.contacts-list {
  width: 30%;

  &__filters-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 30%;
    height: $filters-height;
    background-color: #373737;
    display: flex;
    align-items: center;
    z-index: 10;
  }

  &__filter-input {
    margin: 0 0 0 16px;
  }

  &__contacts-wrapper {
    padding: 16px;
    margin-top: $filters-height;
    height: calc(100vh - 80px);
    overflow-y: auto;
    position: relative;
  }
}
</style>
