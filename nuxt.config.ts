// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  app: {
    head: {
      title: "News App",
      meta: [
        {
          name: "description",
          content:
            "News app developed using Nuxt 3 and vue.js 3 for learning purposes",
        },
      ],
    },
  },
});
