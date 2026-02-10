<template>
  <div class="w-full shadow-sm md:h-[7vh] sm:h-[4vh] sm:flex sm:items-center bg-white dark:bg-transparent dark:shadow-stone-800 flex items-center gap-x-2">
    <div
    class="flex justify-center items-center w-full"
    >
      <ButtonLink
        v-for="route in ROUTE_DATA"
        :key="route.path"
        :path="route.path"
        :prefix_icon="route.icon"
        v-show="route.path !== '/:pathMatch(.*)*'"
        class="cursor-pointer"
      >
      </ButtonLink>
    </div>
    <div class="flex justify-end items-center">
      <ButtonModeColor />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ButtonLink from "./ButtonLink.vue";
import { ROUTE_DATA } from "@/router/route-data";
import ButtonModeColor from "./ButtonModeColor.vue";
</script>

<style></style>
