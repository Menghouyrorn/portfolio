import { createRouter, createWebHistory } from "vue-router";
import { ROUTE_DATA } from "./route-data";

export const router = createRouter({
  history: createWebHistory(),
  routes: ROUTE_DATA,
});
