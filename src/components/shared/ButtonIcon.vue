<template>
  <div>
    <Button :class="classNames" :variant="variant" :size="size"
      ><slot name="prefix_icon" />{{ title }}<slot name="suffix_icon"
    /></Button>
  </div>
</template>

<script lang="ts" setup>
import clsx from "clsx";
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
let classNames = clsx(props.class, "");
</script>

<style></style>
