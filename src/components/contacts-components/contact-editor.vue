<template>
 <div class="contact-editor">
   {{state.editableContact}}qweqwe
 </div>
</template>

<script>
import {useStore} from "vuex"
import { onMounted, reactive } from "vue";
export default {
  name: "ContactEditor",
  setup() {
    const state = reactive({
      editableContact: null
    })
    const store = useStore()
    onMounted(() => {
      _init()
    })
    const _init = () => {
      _catchEditorChanges()
    }
    const _catchEditorChanges = () => {
      store.subscribe((mutation, state) => {
        if (mutation.type === "CONTACTS/SET_CONTACT_TO_EDIT") return _updateFields(mutation.payload)
            })
    }
    
    const _updateFields = (payload) => {
      state.editableContact = payload
      console.log(state.editableContact, 'state')
    }


    return {state}
  }
};
</script>

<style scoped lang="scss">
.contact-editor {
  width: 70%;
}
</style>