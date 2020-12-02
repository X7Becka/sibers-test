<template>
  <div>
    <Progressbar />
    <RouterView>
      <ContactsPage />
    </RouterView>
  </div>
</template>

<script>
import ContactsPage from "@/components/pages/contacts-page";
import "./scss/index.scss";
import Progressbar from "@/components/data-display-components/progressbar";

export default {
  name: "MainLayout",
  components: { Progressbar, ContactsPage }
};
</script>
