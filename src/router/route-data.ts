import { House, BriefcaseBusiness, FileMinus } from "lucide-vue-next";

export const ROUTE_DATA = [
  {
    path: "/",
    component: () => import("@/layouts/user.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/HomePage.vue"),
        icon: House,
      },
      {
        path: "/recommendation",
        component: () => import("@/views/RecommendationPage.vue"),
        icon: FileMinus,
      },
      {
        path: "/work",
        component: () => import("@/views/Work.vue"),
        icon: BriefcaseBusiness,
      },
    ],
  },
  {
    path: "/admin",
    component: () => import("@/layouts/admin.vue"),
    layout: "admin",
    children: [
      {
        path: "",
        component: () => import("@/admin/Dashboard.vue"),
      },
      {
        path: "login",
        component: () => import("@/components/auth/login.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];
