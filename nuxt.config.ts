process.env.DETA_PROJECT_KEY = 'ypEG79dk_p4j9vAz3zBxEcAoay17pouXdTAFL92o4'

export default defineNuxtConfig({
    modules: [
        'nuxt-ev',
        '@vueuse/nuxt',
        '@unocss/nuxt',
        '@kevinmarrec/nuxt-pwa',
    ],
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
                sans: 'DM Sans:400,700',
            },
        },
    },
    sourcemap: false,
    pwa: {
        manifest: {
            name: 'Roba',
            short_name: 'Roba',
            description: 'A groceries list app',
            theme_color: '#ffffff',
            background_color: '#ffffff',
            display: 'standalone',
            orientation: 'portrait',
        },
        icon: {
            fileName: 'icon.png',
        },
    },
    experimental: {
        reactivityTransform: true,
    },
})
