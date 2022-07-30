import InventoryViewVue from "@/views/InventoryView.vue";
import LoginViewVue from "@/views/LoginView.vue";
import POSViewVue from "@/views/POSView.vue";
import PriceListViewVue from "@/views/PriceListView.vue";
import StoreLoginViewVue from "@/views/StoreLoginView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: StoreLoginViewVue,
      meta: {
        hideNavbar: true,
      }
    },
    {
      path: "/inventory",
      component: InventoryViewVue,
    },
    {
      path: "/pos",
      component: POSViewVue,
    },
    {
      path: "/pricelist",
      component: PriceListViewVue,
    },
    {
      path: "/login",
      component: LoginViewVue,
    },
  ],
});

export default router;
