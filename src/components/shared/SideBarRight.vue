<template>
  <div
    class="w-24 gap-y-20 shadow-md h-auto flex flex-col items-center mr-1 py-4"
  >
    <TooltipButton
      :onClick="toggleMode"
      :icon="colorMode !== 'dark' ? Eclipse : Sun"
      :tooltip="
        colorMode !== 'dark' ? 'Switch to Dark Mode' : 'Switch to Light Mode'
      "
    />
    <div class="flex flex-col gap-y-2">
      <TooltipButton :icon="Home" link="/" tooltip="home" />
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
import { ActiveLink } from "@/hooks/useActiveLick";

const colorMode = useColorMode();

const toggleMode = () => {
  colorMode.value = colorMode.value === "dark" ? "light" : "dark";
  console.log(colorMode.value);
};
</script>

<style></style>
