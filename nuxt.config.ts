// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: [
    "@nuxthub/core",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@vueuse/motion/nuxt",
    "@nuxthub/core",
  ],
  css: ["~/assets/css/main.css"],
  runtimeConfig: {},
  hub: {},
});
