<template>
  <div class="mt-10 space-y-2">
    <p class="text-3xl font-bold text-center">Work History</p>
    <p class="text-center font-semibold text-gray-500 dark:text-gray-400">
      Here is a summary of my work experience.
    </p>

    <Card class="rounded-sm mx-2">
      <CardContent>
        <div v-for="value in work" :key="value.id" class="mb-4">
          <workExperience
            :image="value.image"
            :position="value.position"
            :date="value.date"
            :company="value.company"
          />
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
</script>

<style></style>
