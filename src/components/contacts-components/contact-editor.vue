<template>
  <div class="contact-editor">
    <div v-if="state.editableContact" class="contact-editor__editor-field">
      <CustomInput
          :value="state.newData[key]"
          v-model.trim="state.newData[key]"
          :type="type[key] || 'text'"
          :key="index"
          v-for="(value, key, index) in state.newData"
          :placeholder="state.editableContact[key]"
      />
      <button @click="testing">TEST</button>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, reactive } from "vue";
import CustomInput from "@/components/input-components/custom-input";

export default {
  name: "ContactEditor",
  components: { CustomInput },
  setup() {
    const store = useStore();
    const state = reactive({
      editableContact: null,
      newData: {}
    });

    onMounted(() => {
      _init();
    });

    const _init = () => {
      _subscribeToDataChanges();
    };

    const _subscribeToDataChanges = () => {
      store.subscribe((mutation) => {
        if (mutation.type === "CONTACTS/SET_CONTACT_TO_EDIT") return _updateFields(mutation.payload);
      });
    };

    const _updateFields = (payload) => {
      state.editableContact = payload;
      state.newData = _handleDataForPatch(payload)
    };
    
    const _handleDataForPatch = (contact) => {
      const {id, lastEdit, ...dataForPatch} = contact
      const reformatObj = {}
      Object.keys(dataForPatch).forEach(key => {
        reformatObj[key] = null
      })
      return reformatObj
    }

    const type = {
      email: "email",
      password: "password",
      phone: "tel"
    }

    const testing = () => {
      console.log(state.newData, 'state.newData')
    }

    const log = (item) => {
      console.log(item, 'item')
    }


    return { state, testing, log, type };
  }
};
</script>

<style scoped lang="scss">
.contact-editor {
  width: 70%;
}
</style>