export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "vuetify-nuxt-module",
    "@nuxt/image",
  ],

  tailwindcss: {
    viewer: false
  },

  runtimeConfig: {
    authorizeNet: JSON.parse(process.env.AUTHORIZE_NET as string),
    firebase: JSON.parse(process.env.FIREBASE_SERVER as string),
    mailer: JSON.parse(process.env.MAILER as string),
    public: {
      googleApiKey: process.env.GOOGLE_API_KEY,
      firebase: JSON.parse(process.env.FIREBASE_CLIENT as string),
    },
  },

  compatibilityDate: "2024-12-31",
})