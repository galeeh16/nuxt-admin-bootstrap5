// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-icon'
  ],
  ssr: true,
  app: {
    head: {
      title: 'Admin Bootstrap 5'
    }
  },
  css: [
    '~/assets/scss/style.scss'
  ]
})
