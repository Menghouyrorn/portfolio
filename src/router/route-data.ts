export const ROUTE_DATA = [
  {
    path: "/",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/about",
    component: () => import("@/views/AboutPage.vue"),
  },
  {
    path: "/work",
    component: () => import("@/views/Work.vue"),
  },
];
