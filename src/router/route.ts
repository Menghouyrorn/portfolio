import { createMemoryHistory, createRouter } from "vue-router";
import { ROUTE_DATA } from "./route-data";

export const router = createRouter({
  history: createMemoryHistory(),
  routes: ROUTE_DATA,
});
