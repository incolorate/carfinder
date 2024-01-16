export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();
  if (!user) {
    navigateTo("/login");
  }
  nextTick();
});
