<template>
  <Card class="h-auto rounded-sm">
    <CardContent class="flex h-auto gap-x-6 justify-around">
      <div class="flex flex-col gap-y-6 justify-center">
        <motion.div
          :initial="{ y: -100, opacity: 0 }"
          :animate="{ y: 0, opacity: 1 }"
          :transition="{
            delay: 0.2,
            type: 'spring',
            damping: 20,
            stiffness: 55,
          }"
        >
          <p class="text-3xl font-bold">
            I'm <span class="text-[#FFB400]">Web</span> Developer
          </p>
        </motion.div>

        <motion.div
          :initial="{ y: -100, opacity: 0 }"
          :animate="{
            y: 0,
            opacity: 1,
          }"
          :transition="{
            delay: 0.1,
            type: 'spring',
            damping: 20,
            stiffness: 55,
          }"
        >
          <p class="font-semibold text-gray-500 dark:text-gray-400">
            I'm passionate about building responsive and user-friendly web
            applications, with a focus on Vue.js and modern JavaScript
            frameworks. and I love to learn new technologies and improve my
            skills.
          </p>
        </motion.div>
        <motion.div
          :initial="{ x: 100, opacity: 0 }"
          :animate="{ x: 0, opacity: 1 }"
          :transition="{
            delay: 0.1,
            type: 'spring',
            damping: 20,
            stiffness: 55,
          }"
        >
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
        </motion.div>
      </div>
      <motion.div
        :initial="{ x: 100, opacity: 0 }"
        :animate="{ x: 0, opacity: 1 }"
        :transition="{
          delay: 0.1,
          type: 'spring',
          damping: 20,
          stiffness: 55,
        }"
      >
        <div>
          <div v-if="isLoading" class="w-[275px] h-[405px]">
            <Skeleton class="w-full h-full" />
          </div>
          <img src="/houy.jpg" width="550" v-else />
        </div>
      </motion.div>
    </CardContent>
  </Card>
</template>

<script lang="ts" setup>
import { motion } from "motion-v";
import Card from "../ui/card/Card.vue";
import CardContent from "../ui/card/CardContent.vue";
import ButtonIcon from "./ButtonIcon.vue";
import { ArrowDownToLine, Loader } from "lucide-vue-next";
import { onMounted, ref } from "vue";
import Skeleton from "../ui/skeleton/Skeleton.vue";

const downloadCV = () => {
  const link = document.createElement("a");
  link.href = "/my_cv.pdf";
  link.download = "Rorn_Menghouy_Jr_Frontend_Developer.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

let isLoading = ref(true);

const loading_image = async (url: any) => {
  let img = new Image();
  img.src = url;
  await new Promise((res) => (img.onload = res));
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
};

onMounted(() => {
  loading_image("/houy.jpg");
});
</script>

<style></style>
