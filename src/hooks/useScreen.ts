import { ref } from "vue";

export const useOnMobile = () => {
  let width = ref(0);
  let height = ref(0);
  let isMobile = ref(false);

  if (typeof window !== "undefined") {
    window.scroll = () => {
      width.value = window.pageXOffset;
      height.value = window.pageYOffset;
    };
  }

  if (height.value > 200) {
    isMobile.value = true;
  } else {
    isMobile.value = false;
  }
};
