<template>
  <Button :class="props.class" :variant="variant" :size="size">
    <slot name="prefix_icon"></slot>
    {{ title }}
    <slot name="suffix_icon"></slot>
  </Button>
</template>

<script lang="ts" setup>
import Button from "../ui/button/Button.vue";
import type { HTMLAttributes } from "vue";
import type { PrimitiveProps } from "reka-ui";
interface ButtonPros extends PrimitiveProps {
  size?: "default" | "sm" | "lg" | "icon" | null;
  class?: HTMLAttributes["class"];
  variant?: "default" | "outline" | "ghost" | "link" | "destructive" | null;
  title?: string;
}
const props = withDefaults(defineProps<ButtonPros>(), {
  as: "button",
});
</script>

<style></style>
