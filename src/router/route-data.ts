import { House,EqualApproximately,BriefcaseBusiness } from "lucide-vue-next";

export const ROUTE_DATA = [
  {
    path: "/",
    component: () => import("@/views/HomePage.vue"),
    icon:House
  },
  {
    path: "/about",
    component: () => import("@/views/AboutPage.vue"),
    icon:EqualApproximately
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
