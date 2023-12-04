// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "vuetify-nuxt-module"
  ],

  imports: {
    dirs: ["./stores", "./types"],
  }
})