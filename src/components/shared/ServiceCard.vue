<template>
  <Card
    class="h-auto rounded-sm border cursor-pointer hover:shadow-lg transition-all"
  >
    <CardHeader class="flex items-center justify-center">
      <img :src="image" />
    </CardHeader>
    <CardContent class="space-y-2 text-center">
      <p class="font-semibold text-lg">{{ title }}</p>
      <p class="text-gray-500 text-sm font-semibold dark:text-gray-400">
        {{ description }}
      </p>
    </CardContent>
  </Card>
</template>

<script lang="ts" setup>
import Card from "../ui/card/Card.vue";
import CardContent from "../ui/card/CardContent.vue";
import CardHeader from "../ui/card/CardHeader.vue";
defineProps<{
  image: string;
  title: string;
  description: string;
}>();
</script>

<style></style>
