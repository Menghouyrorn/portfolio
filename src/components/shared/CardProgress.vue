<template>
  <div class="w-[85%] mx-auto space-y-2.5">
    <Accordion
      type="single"
      class="w-full"
      collapsible
      default-value="Languages"
    >
      <hr class="border-gray-100 border-2 mx-auto" />
      <AccordionItem :value="title">
        <AccordionTrigger class="cursor-pointer hover:no-underline">
          <p class="text-xl font-semibold uppercase">
            {{ title }}
          </p>
        </AccordionTrigger>
        <AccordionContent
          v-for="v in data"
          :key="v.language"
          class="w-full h-full gap-y-2.5"
        >
          <div class="flex flex-col gap-y-2">
            <div class="flex justify-between">
              <p class="text-gray-500">{{ v.language }}</p>
              <p class="text-gray-500">{{ v.percentage }}%</p>
            </div>
            <div
              class="border-[#FFB400] border-1 h-[10px] m-0 px-0.5 flex items-center rounded-md"
            >
              <p
                :class="`bg-[#FFB400] h-[6px] m-0 p-0 rounded-md`"
                :style="{ width: v.percentage + '%' }"
              ></p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>

<script lang="ts" setup>
import Accordion from "../ui/accordion/Accordion.vue";
import AccordionContent from "../ui/accordion/AccordionContent.vue";
import AccordionItem from "../ui/accordion/AccordionItem.vue";
import AccordionTrigger from "../ui/accordion/AccordionTrigger.vue";

withDefaults(
  defineProps<{
    title: string;
    data: Array<{ language: string; percentage: number }>;
  }>(),
  {
    title: "Languages",
  }
);
</script>

<style scoped></style>
