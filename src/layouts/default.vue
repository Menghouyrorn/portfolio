<template>
  <div class="flex justify-between">
    <SideBarLeft />
    <div class="w-[65%] border my-2">
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
