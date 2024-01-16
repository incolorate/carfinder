// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@nuxtjs/supabase",
  ],
  devtools: { enabled: true },
});
