<template>
  <div
    class="w-24 gap-y-20 shadow-md h-auto flex flex-col items-center mr-1 py-4"
  >
    <TooltipButton :icon="Sun" link="/about" />
    <div>
      <TooltipButton :icon="Eclipse" link="/dark" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Sun, Eclipse } from "lucide-vue-next";
import TooltipButton from "./TooltipButton.vue";
</script>

<style></style>
