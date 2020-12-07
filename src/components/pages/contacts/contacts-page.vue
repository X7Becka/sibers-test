<template>
  <div class="contacts-page">
    <ContactsList :="{...mapStateToProps}" />
    <ContactEditor/>
  </div>
</template>

<script>
import ContactsList from "@/components/pages/contacts/contacts-list";
import ContactEditor from "@/components/pages/contacts/contact-editor";

export default {
  name: "ContactsPage",
  components: { ContactEditor, ContactsList },
  setup() {
    const mapStateToProps = {
      className: "contacts-page__contacts-block",
    }

    return { mapStateToProps };
  }
};
</script>

<style scoped lang="scss">
.contacts-page {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
}
</style>
