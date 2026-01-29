<template>
  <div class="space-y-10">
    <motion.div
      :initial="{ y: -50, opacity: 0 }"
      :animate="{ y: 0, opacity: 1 }"
      :transition="{
        delay: 0.4,
        type: 'spring',
        damping: 10,
        stiffness: 55,
      }"
    >
      <p class="text-3xl font-bold text-center">My Services</p>
    </motion.div>
    <div class="grid md:grid-cols-3 gap-6" ref="boxRef">
      <div v-for="(items, index) in services" :key="items.title">
        <motion.div
          v-if="isInView"
          :initial="{ x: -100, opacity: 0 }"
          :animate="{ x: 0, opacity: 1 }"
          :transition="{
            delay: 0.15 + index / 1.5,
            type: 'spring',
            damping: 20,
            stiffness: 55,
          }"
        >
          <ServiceCard
            :image="items.img"
            :title="items.title"
            :description="items.description"
          />
        </motion.div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ServiceCard from "./ServiceCard.vue";
import services from "../../constants/services.json";
import { motion } from "motion-v";
import { useInView } from "motion-v";
import { ref } from "vue";
let boxRef = ref();
let isInView = useInView(boxRef);
</script>

<style></style>
