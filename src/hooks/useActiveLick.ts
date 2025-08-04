import { computed } from "vue";
import { useRoute } from "vue-router";

interface ActiveLinkProps {
  route: string | undefined;
}
const ActiveLink = ({ route }: ActiveLinkProps) => {
  const currentRoute = useRoute();

  return computed(() => {
    const currentPath = currentRoute.path.replace("/", "");
    const targetPath = (route ?? "").replace("/", "");
    return currentPath === targetPath;
  });
};

export { ActiveLink };
