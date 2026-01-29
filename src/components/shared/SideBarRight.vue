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
      <TooltipButton :icon="Home" link="/" tooltip="Home" />
      <TooltipButton
        :icon="BriefcaseBusiness"
        link="/work"
        tooltip="Work Experience"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Sun, Eclipse, Home, BriefcaseBusiness } from "lucide-vue-next";
import TooltipButton from "./TooltipButton.vue";
import { useColorMode } from "@vueuse/core";

const colorMode = useColorMode();

const toggleMode = () => {
  colorMode.value = colorMode.value === "dark" ? "light" : "dark";
};
</script>

<style></style>
