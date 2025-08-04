<template>
  <div class="flex flex-col gap-y-2">
    <div class="w-[120px] h-[120px] mx-auto">
      <div
        class="w-full h-full rounded-full bg-[url('/public/me.jpg')] bg-cover bg-center p-2"
      ></div>
      <div class="w-full h-full relative flex justify-end right-3 -top-6">
        <div class="w-[12px] h-[12px] right-1 rounded-full bg-green-500"></div>
      </div>
    </div>
    <p class="text-center text-lg font-medium m-0 p-0">Rorn Menghouy</p>
    <p class="text-center text-base font-medium text-gray-600 m-0 p-0">
      Web Developer
    </p>
    <div class="flex justify-center gap-x-2.5 w-full items-center">
      <Button
        class="bg-[#FFB400] rounded-full cursor-pointer hover:bg-[#FFA300] text-black"
        size="icon"
        ><Facebook :size="20"
      /></Button>
      <Button
        class="bg-[#FFB400] rounded-full cursor-pointer hover:bg-[#FFA300] text-black"
        size="icon"
        ><Linkedin :size="20"
      /></Button>
      <Button
        class="bg-[#FFB400] rounded-full cursor-pointer hover:bg-[#FFA300] text-black"
        size="icon"
        ><Github :size="20"
      /></Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "../ui/button/Button.vue";
import { Facebook, Linkedin, Github } from "lucide-vue-next";
</script>

<style></style>
