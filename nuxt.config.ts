import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    modules: [
        'nuxt-ev',
        '@vueuse/nuxt',
        '@unocss/nuxt',
        '@pinia/nuxt',
        '@nuxtjs/color-mode',
        '@kevinmarrec/nuxt-pwa',
    ],
    experimental: {
        reactivityTransform: true,
    },
    vueuse: {
        ssrHandlers: true,
    },
    unocss: {
        uno: true,
        attributify: true,
        preflight: true,
        icons: {
            scale: 1.2,
        },
        webFonts: {
            provider: 'google',
            fonts: {
                sans: 'Inter:400,700',
            },
        },
    },
    colorMode: {
        classSuffix: '',
    },
})
