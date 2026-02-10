<template>
  <div
    class="w-24 md:gap-y-20 shadow-md h-auto md:flex md:flex-col md:items-center mr-1 py-4 hidden"
  >
    <ButtonModeColor/>
    <div class="flex flex-col gap-y-2">
      <TooltipButton v-for="v in route_data" :key="v.id" :icon="v.icon" :link="v.link" :tooltip="v.tooltip" :side="v.side"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {Home, BriefcaseBusiness,FileMinus } from "lucide-vue-next";
import TooltipButton from "./TooltipButton.vue";
import type { Component } from "vue";
import ButtonModeColor from "./ButtonModeColor.vue";


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

</script>

<style></style>
