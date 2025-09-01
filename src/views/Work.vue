<template>
  <div class="mt-10 space-y-2 w-full">
    <motion.div
      :initial="{ y: -100, opacity: 0 }"
      :animate="{ y: 0, opacity: 1 }"
      :transition="{
        delay: 0.1,
        type: 'spring',
        damping: 20,
        stiffness: 55,
      }"
    >
      <p class="text-3xl font-bold text-center">Work History</p>
    </motion.div>
    <motion.div
      :initial="{ x: 100, opacity: 0 }"
      :animate="{ x: 0, opacity: 1 }"
      :transition="{
        delay: 0.15,
        type: 'spring',
        damping: 20,
        stiffness: 55,
      }"
    >
      <p class="text-center font-semibold text-gray-500 dark:text-gray-400">
        Here is a summary of my work experience.
      </p>
    </motion.div>

    <Card class="rounded-sm mx-2 w-full">
      <CardContent>
        <div v-for="(value, index) in work" :key="value.id" class="mb-4">
          <motion.div
            :initial="{ x: -100, opacity: 0 }"
            :animate="{ x: 0, opacity: 1 }"
            :transition="{
              delay: 0.15 + index / 1.5,
              type: 'spring',
              damping: 20,
              stiffness: 55,
            }"
          >
            <workExperience
              :image="value.image"
              :position="value.position"
              :date="value.date"
              :company="value.company"
            />
          </motion.div>
          <hr class="border-2" />
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import Card from "@/components/ui/card/Card.vue";
import CardContent from "@/components/ui/card/CardContent.vue";
import workExperience from "@/components/shared/work-experience.vue";
import work from "@/constants/work.json";
import { motion } from "motion-v";
</script>

<style></style>
