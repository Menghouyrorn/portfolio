<template>
  <div class="flex">
    <div class="w-auto">
      <SideBarLeft />
    </div>
    <div class="w-full border bg-[#F0F0F6] dark:bg-transparent p-3">
      <RouterView />
    </div>
    <SideBarRight />
  </div>
</template>

<script lang="ts" setup>
import SideBarLeft from "@/components/shared/SideBarLeft.vue";
import SideBarRight from "@/components/shared/SideBarRight.vue";
import { RouterView } from "vue-router";
</script>

<style></style>
