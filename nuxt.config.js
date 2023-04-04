// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseURL: "https://newsapi.org/v2",
    },
    private: {
      newsApiKey: process.env.NEWS_API_KEY,
    },
  },
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
