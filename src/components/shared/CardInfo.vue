<template>
  <Card
    class="relative overflow-hidden rounded-xl border border-white/10 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl"
  >
    <div
      class="absolute -top-24 -right-24 w-96 h-96 bg-[#FFB400]/20 rounded-full blur-3xl"
    ></div>
    <CardContent
      class="relative flex flex-col md:flex-row gap-10 items-center justify-between p-8"
    >
      <motion.div
        class="flex flex-col gap-y-6 max-w-xl"
        :initial="{ opacity: 0, y: 40 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.3, ease: 'easeOut' }"
      >
        <motion.h1
          class="text-4xl md:text-5xl font-extrabold leading-tight"
          :initial="{ opacity: 0, y: -40 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.5 }"
        >
          I’m a
          <span
            class="relative bg-gradient-to-r from-[#FFB400] to-orange-500 bg-clip-text text-transparent"
          >
            Web Developer
            <span
              class="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#FFB400] to-orange-500 rounded-full"
            ></span>
          </span>
        </motion.h1>
        <motion.p
          class="text-gray-600 dark:text-gray-400 leading-relaxed"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 1 }"
        >
          I craft modern, responsive, and user-friendly web applications with
          <span class="font-semibold text-gray-800 dark:text-gray-200">
            Vue.js & modern JavaScript </span
          >. Always learning, always improving 🚀
        </motion.p>
        <motion.div
          :initial="{ opacity: 0, x: -20 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ delay: 1.5 }"
        >
          <ButtonIcon
            @click="downloadCV"
            title="DOWNLOAD CV"
            class="group w-52 rounded-xl bg-gradient-to-r from-[#FFB400] to-orange-500 text-black font-semibold shadow-lg shadow-orange-500/30 hover:scale-105 cursor-pointer transition-all duration-300"
            variant="outline"
          >
            <template #suffix_icon>
              <ArrowDownToLine
                class="transition-transform duration-300 group-hover:translate-y-1"
              />
            </template>
          </ButtonIcon>
        </motion.div>
      </motion.div>
      <motion.div
        class="hidden md:block relative cursor-pointer"
        :animate="{ y: [0, -10, 0] }"
        :transition="{
          delay: 0.2,
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }"
      >
        <div class="relative">
          <div
            class="absolute inset-0 rounded-sm bg-gradient-to-tr from-[#FFB400]/20 to-orange-500/20 blur-2xl"
          ></div>
          <div v-if="isLoading" class="w-[360px] h-[520px]">
            <Skeleton class="w-full h-full rounded-sm" />
          </div>
          <img
            v-else
            src="/houy.jpg"
            class="relative w-[360px] h-[520px] object-cover rounded-sm shadow-sm shadow-black/20"
          />
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
import { ArrowDownToLine } from "lucide-vue-next";
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
  isLoading.value = false;
};

onMounted(() => {
  loading_image("/houy.jpg");
});
</script>

<style></style>
