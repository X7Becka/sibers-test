import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("../components/pages/contacts/contacts-page")
  },
  {
    /**
     * SPECS:
     * Игра "Память"
     Поле 6х6. 18 парных карточек с различными иконками.
     При нажатии на кнопку “старт” запускается таймер.
     Карты, естественно, должны располагаться в случайном порядке.
     По нажатию на карточку она открывается, в течении 5 сек игроку нужно открыть вторую карточку, если иконки на паре открытых карт совпадают они удаляются, если нет - пара открытых карт закрываются.
     Игра заканчивается когда все пары карт найдены. Таймер останавливается.
     При этом нужно:

     Использовать React/Vue/Angular
     Использовать state manager
     Решение раположить на github
     Реализовать сборку проекта
     Создать таблицу результатов
     */
   path: "/memory",
   name: "Memory",
   component: () => import("../components/pages/memory/memory-page")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
