import { defineConfig } from 'unocss'

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
    ],
})
