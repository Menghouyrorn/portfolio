<template>
  <RouterLink :to="path" v-slot="{ isActive }">
    <ButtonIcon
      v-bind="props"
      :class="isActive ? 'text-amber-500 transition-normal' : 'dark:text-gray-700'"
    >
      <slot name="btn_container"></slot>
      <template #prefix_icon>
        <component :is="props.prefix_icon"></component>
      </template>
      <template #suffix_icon>
        <component :is="props.suffix_icon"></component>
      </template>
    </ButtonIcon>
  </RouterLink>
</template>

<script lang="ts" setup>
import ButtonIcon from "./ButtonIcon.vue";
import { type Component, type HtmlHTMLAttributes } from "vue";

interface ButtonLinkProps {
  class?: HtmlHTMLAttributes["class"];
  size?: "default" | "icon" | "lg" | "sm";
  variant?: "default" | "destructive" | "ghost" | "link" | "outline";
  path: string;
  prefix_icon?: Component;
  suffix_icon?: Component;
}

const props = withDefaults(defineProps<ButtonLinkProps>(), {
  size: "sm",
  variant: "ghost",
  path: "",
});
</script>

<style></style>
