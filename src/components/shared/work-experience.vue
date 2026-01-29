<template>
  <div class="md:flex md:flex-row md:justify-start @min-xs:flex @min-xs:flex-col @min-xs:justify-center @min-xs:items-center items-center gap-x-4">
    <img :src="`/${image}`" class="@min-xs:m-auto md:m-0" width="140" />
    <div class="space-y-2">
      <p class="font-extrabold text-gray-500 dark:text-gray-400">
        {{ position }}
      </p>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <span class="text-[#FFB400] font-bold">From : </span>
        <span class="font-bold">{{ date }}</span>
      </p>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <span class="text-[#FFB400] font-bold">At : </span>
        <span class="font-bold">{{ company }}</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  image?: string;
  position?: string;
  date?: string;
  company?: string;
}>();
</script>

<style></style>
