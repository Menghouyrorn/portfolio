<template>
  <div
    class="w-full shadow-sm md:h-[7vh] sm:h-[4vh] sm:w-full sm:flex sm:justify-center sm:items-center bg-white flex items-center justify-center gap-x-2"
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
</template>

<script lang="ts" setup>
import ButtonLink from "./ButtonLink.vue";
import { ROUTE_DATA } from "@/router/route-data";
</script>

<style></style>
