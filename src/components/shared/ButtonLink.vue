<template>
  <RouterLink :to="path">
    <ButtonIcon v-bind="props" :class="activeLink ? 'text-amber-500':''">
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
import { computed, type Component, type HtmlHTMLAttributes } from "vue";
import { useRoute } from "vue-router";

interface ButtonLinkProps {
  class?: HtmlHTMLAttributes["class"];
  size?: "default" | "icon" | "lg" | "sm";
  variant?: "default" | "destructive" | "ghost" | "link" | "outline";
  path:string,
  prefix_icon?:Component,
  suffix_icon?:Component
}

const route = useRoute();

const props = withDefaults(defineProps<ButtonLinkProps>(), {
  size: "sm",
  variant: "ghost",
  path: "",
});

const activeLink = computed(()=>{
   return route.path == props.path
});


</script>

<style></style>
