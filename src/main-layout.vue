<template>
  <div class="main-layout">
    <Progressbar />
<RouterLinks/>
    <RouterView/>
  </div>
</template>

<script>
import ContactsPage from "@/components/pages/contacts-page";
import "./scss/index.scss";
import Progressbar from "@/components/data-display-components/progressbar";
import MemoryPage from "@/components/pages/memory-page";
import RouterLinks from "@/components/data-display-components/router-links";

export default {
  name: "MainLayout",
  components: { RouterLinks, Progressbar }
};
</script>

<style scoped lang="scss">
.main-layout {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
