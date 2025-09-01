<template>
  <div
    :class="
      isMobile
        ? 'shadow-lg h-full w-auto py-4 flex flex-col gap-y-4 transition-all'
        : 'shadow-lg h-auto w-[360px] py-4 flex flex-col gap-y-4'
    "
  >
    <div class="flex justify-end px-2">
      <Button
        v-if="!isMobile"
        @click="onClick"
        size="icon"
        variant="outline"
        class="cursor-pointer"
        ><PanelLeftClose
      /></Button>
      <Button
        v-if="isMobile"
        @click="onClick"
        size="icon"
        variant="outline"
        class="cursor-pointer"
        ><PanelLeftOpen />
      </Button>
    </div>
    <div v-if="!isMobile" class="space-y-4">
      <Profile />
      <PersonalInfo />
      <CardProgress title="Languages" :data="language" />
      <CardProgress title="Skills" :data="skills" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Button from "../ui/button/Button.vue";
import CardProgress from "./CardProgress.vue";
import PersonalInfo from "./PersonalInfo.vue";
import Profile from "./Porfile.vue";
import language from "@/constants/languages.json";
import skills from "@/constants/skills.json";
import { PanelLeftClose, PanelLeftOpen } from "lucide-vue-next";
let isMobile = ref<boolean>(
  JSON.parse(window.localStorage.getItem("isMobile") || "false")
);
const onClick = () => {
  isMobile.value = !isMobile.value;
  window.localStorage.setItem("isMobile", JSON.stringify(isMobile.value));
};
</script>

<style></style>
