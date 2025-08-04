<template>
  <div class="shadow-lg h-auto w-[360px] py-4 flex flex-col gap-y-4">
    <Profile />
    <PersonalInfo />
    <CardProgress title="Languages" :data="language" />
    <CardProgress title="Skills" :data="skills" />
  </div>
</template>

<script lang="ts" setup>
import CardProgress from "./CardProgress.vue";
import PersonalInfo from "./PersonalInfo.vue";
import Profile from "./Porfile.vue";
import language from "@/constants/languages.json";
import skills from "@/constants/skills.json";
</script>

<style></style>
