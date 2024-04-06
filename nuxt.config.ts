// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  app: {
    baseURL: '/yjs/', 
    head:{
      htmlAttrs: {
        lang: 'ko'
      },
      title: 'yjs',
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'google',
          content: 'notranslate'
        }
      ],
    }
  },
  modules: [
    '@pinia/nuxt',
  ],
  css: [
    // '@/assets/scss/common.scss',
  ],
  build: {
  },
})
