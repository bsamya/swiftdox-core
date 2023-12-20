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
    authorizeNet: JSON.parse(process.env.AUTHORIZE_NET),
    firebase: JSON.parse(process.env.FIREBASE_SERVER),
    mailer: JSON.parse(process.env.MAILER),
    public: {
      googleApiKey: process.env.GOOGLE_API_KEY,
      firebase: JSON.parse(process.env.FIREBASE_CLIENT),
    },
  },

})