<template>
  <div class="flex">
    <div class="w-auto">
      <SideBarLeft />
    </div>
    <div class="w-full border bg-[#F0F0F6] dark:bg-transparent p-3 min-h-screen max-h-max space-y-2">
      <Navbar class="sm:block md:hidden"/>
      <RouterView />
    </div>
    <SideBarRight />
  </div>
</template>

<script lang="ts" setup>
import Navbar from "@/components/shared/Navbar.vue";
import SideBarLeft from "@/components/shared/SideBarLeft.vue";
import SideBarRight from "@/components/shared/SideBarRight.vue";
import { RouterView } from "vue-router";
</script>

<style></style>
