<template>
  <div>
    <TooltipButton
      :onClick="toggleMode"
      :icon="colorMode !== 'dark' ? Eclipse : Sun"
      link=""
      :tooltip="
        colorMode !== 'dark' ? 'Switch to Dark Mode' : 'Switch to Light Mode'
      "
    />
  </div>
</template>

<script lang="ts" setup>
import { useColorMode } from "@vueuse/core";
import { Eclipse, Sun } from "lucide-vue-next";
import TooltipButton from "./TooltipButton.vue";

const colorMode = useColorMode();

const toggleMode = () => {
  colorMode.value = colorMode.value === "dark" ? "light" : "dark";
};
</script>

<style></style>
