<template>
  <RouterView>
    <ContactsPage />
  </RouterView>
</template>

<script>
import ContactsPage from "@/components/pages/contacts-page";
import "./scss/index.scss";

export default {
  name: "MainLayout",
  components: { ContactsPage }
};
</script>
