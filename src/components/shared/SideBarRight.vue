<template>
  <div
    class="w-24 md:gap-y-20 shadow-md h-auto md:flex md:flex-col md:items-center mr-1 py-4 hidden"
  >
    <TooltipButton
      :onClick="toggleMode"
      :icon="colorMode !== 'dark' ? Eclipse : Sun"
      link=""
      :tooltip="
        colorMode !== 'dark' ? 'Switch to Dark Mode' : 'Switch to Light Mode'
      "
    />
    <div class="flex flex-col gap-y-2">
      <TooltipButton v-for="v in route_data" :key="v.id" :icon="v.icon" :link="v.link" :tooltip="v.tooltip" :side="v.side"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Sun, Eclipse, Home, BriefcaseBusiness,FileMinus } from "lucide-vue-next";
import TooltipButton from "./TooltipButton.vue";
import { useColorMode } from "@vueuse/core";
import type { Component } from "vue";

const colorMode = useColorMode();

interface RouteType{
  id:number | string,
  icon:Component,
  link:string,
  tooltip:string,
  side:'top' | 'right' | 'bottom' | 'left'
};

const route_data:RouteType[] = [
  {
    id:1,
    icon:Home,
    link:'/',
    tooltip:'Home',
    side:'top'
  },
  {
    id:1,
    icon:BriefcaseBusiness,
    link:'/work',
    tooltip:'Work Experience',
    side:'right'
  },
  {
    id:1,
    icon:FileMinus,
    link:'/recommendation',
    tooltip:'Recommendation',
    side:'left'
  },
]

const toggleMode = () => {
  colorMode.value = colorMode.value === "dark" ? "light" : "dark";
};
</script>

<style></style>
