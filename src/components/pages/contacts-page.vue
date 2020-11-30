<template>
  <div class="contacts-page">
    <ContactsBlock
      class-name="contacts-page__contacts-block"
      :contacts="state.contacts"
    />
  </div>
</template>

<script>
import ContactsBlock from "@/components/contacts-components/contacts-block";
import { onMounted, reactive, ref } from "vue";
import axios from "axios";

export default {
  name: "ContactsPage",
  components: { ContactsBlock },
  setup() {
    const state = reactive({
      contacts: null
    });
    const num = ref(0);
    onMounted(() => {
      fetchContacts();
    });

    const incNum = () => {
      num.value++;
    };

    const fetchContacts = () => {
      axios
        .get("http://demo.sibers.com/users")
        .then(resp => (state.contacts = resp.data));
    };

    return { state, num, incNum };
  }
};
</script>

<style scoped lang="scss">
.contacts-page {
  width: 30%;
}
</style>
