import { defineConfig } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig ({
    shortcuts: [
        [/pill-(\w+)/, ([, color]) => `px-.5em py-.1em text-${color}-700 b-2 bg-${color}-300/30 b-${color}-300/50 rounded-2`],
        {
            'a-input': `
                rounded 
                shadow dark:shadow-gray-7
                focus:shadow-lg 
                py-1 px-2 transition
                b-1 b-gray-3 dark:b-gray-5
                focus:b-gray-500 dark:focus:b-gray-7
                bg-transparent outline-none
            `,
        },
        {
            'expo-in': 'ease-[cubic-bezier(0.95,0.05,0.795,0.035)]',
            'expo-out': 'ease-[cubic-bezier(0.19,1,0.22,1)]',
        },
    ],
    theme: {
        colors: {
            primary: {
                50: '#fff0f3',
                100: '#ffe2e9',
                200: '#ffcad8',
                300: '#ff9fb7',
                400: '#ff6992',
                500: '#ff3370',
                600: '#ed115d',
                700: '#c80850',
                800: '#a80949',
                900: '#8f0c45',
                DEFAULT: '#ff3370',
            },
        },
    },
    transformers: [
        transformerDirectives(),
    ],
})
