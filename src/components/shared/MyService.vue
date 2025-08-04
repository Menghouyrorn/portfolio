<template>
  <div class="space-y-10">
    <p class="text-3xl font-bold text-center">My Services</p>
    <div class="grid grid-cols-3 gap-x-6">
      <div v-for="items of services" :key="items.title">
        <ServiceCard
          :image="items.img"
          :title="items.title"
          :description="items.description"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ServiceCard from "./ServiceCard.vue";
import services from "../../constants/services.json";
</script>

<style></style>
