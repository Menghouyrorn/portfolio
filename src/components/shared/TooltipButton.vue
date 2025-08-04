<template>
  <TooltipProvider :delay-duration="400">
    <Tooltip>
      <TooltipTrigger>
        <RouterLink :to="link">
          <Button size="icon" class="cursor-pointer" variant="ghost"
            ><component :is="icon"
          /></Button>
        </RouterLink>
      </TooltipTrigger>
      <TooltipContent>
        <p>Light Mode</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>

<script lang="ts" setup>
import Button from "../ui/button/Button.vue";
import TooltipProvider from "../ui/tooltip/TooltipProvider.vue";
import Tooltip from "../ui/tooltip/Tooltip.vue";
import TooltipTrigger from "../ui/tooltip/TooltipTrigger.vue";
import TooltipContent from "../ui/tooltip/TooltipContent.vue";
import { RouterLink } from "vue-router";
import type { Component } from "vue";
defineProps<{
  icon: Component;
  link: string;
}>();
</script>

<style></style>
