<template>
  <div class="contact-editor">
    <div v-if="state.editableContact" class="contact-editor__editor-field">
      <CustomInput
        v-for="(value, key, index) in state.newData"
        :key="index"
        v-model.trim="state.newData[key]"
        :value="state.newData[key]"
        :type="type[key] || 'text'"
        :placeholder="state.editableContact[key]"
      />
    </div>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {onMounted, reactive} from 'vue'
import CustomInput from '@/components/inputs/CustomInput'

export default {
  name: 'ContactEditor',
  components: {CustomInput},
  setup() {
    const store = useStore()
    const state = reactive({
      editableContact: null,
      newData: {}
    })

    onMounted(() => {
      _init()
    })

    const _init = () => {
      _subscribeToDataChanges()
    }

    const _subscribeToDataChanges = () => {
      store.subscribe(mutation => {
        if (mutation.type === 'CONTACTS/SET_CONTACT_TO_EDIT')
          return _updateFields(mutation.payload)
      })
    }

    const _updateFields = payload => {
      state.editableContact = payload
      state.newData = _handleDataForPatch(payload)
    }

    const _handleDataForPatch = contact => {
      const {id, lastEdit, ...dataForPatch} = contact
      const reformatObj = {}
      Object.keys(dataForPatch).forEach(key => {
        reformatObj[key] = null
      })
      return reformatObj
    }

    const type = {
      email: 'email',
      password: 'password',
      phone: 'tel'
    }
    return {state, type}
  }
}
</script>

<style scoped lang="scss">
.contact-editor {
  width: 70%;
  padding: 48px 0;
}
</style>
