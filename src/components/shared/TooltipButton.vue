<template>
  <TooltipProvider :delay-duration="400">
    <Tooltip>
      <TooltipTrigger as-child>
        <RouterLink :to="link as any">
          <Button
            @click="onClick"
            size="icon"
            :class="
              isActive && link
                ? 'text-[#FFB400] cursor-pointer'
                : 'cursor-pointer'
            "
            variant="ghost"
            ><component :is="icon"
          /></Button>
        </RouterLink>
      </TooltipTrigger>
      <TooltipContent>
        {{ tooltip }}
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
import { ActiveLink } from "@/hooks/useActiveLick";
const props = defineProps<{
  icon: Component;
  link?: string;
  onClick?: () => void;
  tooltip?: string;
}>();
const isActive = ActiveLink({ route: props.link });
</script>

<style></style>
