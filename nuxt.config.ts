// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  css: ["~/assets/css/main.css"],
  compatibilityDate: "2024-11-01",

  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap",
        },
      ],
    },
  },

  runtimeConfig: {
    // Private keys (only available server-side)
    OPENAI_API_KEY: process.env.NUXT_OPENAI_API_KEY,
    OPENAI_MODEL: process.env.NUXT_OPENAI_MODEL,
  },
});
