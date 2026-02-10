import { House,BriefcaseBusiness,FileMinus } from "lucide-vue-next";

export const ROUTE_DATA = [
  {
    path: "/",
    component: () => import("@/views/HomePage.vue"),
    icon:House
  },
  {
    path: "/recommendation",
    component: () => import("@/views/RecommendationPage.vue"),
    icon:FileMinus
  },
  {
    path: "/work",
    component: () => import("@/views/Work.vue"),
    icon:BriefcaseBusiness
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];
