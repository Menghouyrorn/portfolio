<template>
  <Card class="h-auto rounded-sm">
    <CardContent class="flex h-auto gap-x-6 justify-around">
      <div class="flex flex-col gap-y-6 justify-center">
        <p class="text-3xl font-bold">
          I'm <span class="text-[#FFB400]">Web</span> Developer
        </p>
        <p class="font-semibold text-gray-500 dark:text-gray-400">
          I'm passionate about building responsive and user-friendly web
          applications, with a focus on Vue.js and modern JavaScript frameworks.
          and I love to learn new technologies and improve my skills.
        </p>
        <ButtonIcon
          @click="downloadCV"
          title="DOWNLOAD CV"
          class="w-48 rounded-sm bg-[#FFB400] cursor-pointer"
          variant="outline"
        >
          <template #suffix_icon>
            <ArrowDownToLine />
          </template>
        </ButtonIcon>
      </div>
      <div>
        <img src="/houy.jpg" width="550" />
      </div>
    </CardContent>
  </Card>
</template>

<script lang="ts" setup>
import Card from "../ui/card/Card.vue";
import CardContent from "../ui/card/CardContent.vue";
import ButtonIcon from "./ButtonIcon.vue";
import { ArrowDownToLine } from "lucide-vue-next";
let isdownload = false;

const downloadCV = () => {
  isdownload = true;
  const link = document.createElement("a");
  link.href = "/my_cv.pdf";
  link.download = "Rorn_Menghouy_Jr_Web_Developer.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  isdownload = false;
};
</script>

<style></style>
