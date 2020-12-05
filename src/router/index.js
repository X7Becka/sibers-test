import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("./../components/pages/contacts-page")
  },
  {
   path: "/memory",
   name: "Memory",
   component: () => import("./../components/pages/memory-page")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
