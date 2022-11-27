import type { DirectiveBinding } from 'nuxt/dist/app/compat/capi'

class Style {
    private classes: string[]

    constructor() {
        this.classes = []
    }

    if(condition: boolean) {
        return {
            apply: (className: string) => {
                if (condition)
                    this.classes.push(className)

                return this
            },
        }
    }

    apply(className: string) {
        this.classes.push(className)
        return this
    }
}

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('style-if', {
        beforeMount(el, binding: DirectiveBinding<Style>) {
            el.className = `${(<any>binding.value).classes.join(' ')}`
        },
        beforeUpdate(el, binding: DirectiveBinding<Style>) {
            el.className = `${(<any>binding.value).classes.join(' ')}`
        },
        getSSRProps() {
            return {}
        },
    })

    return {
        provide: {
            style: () => new Style(),
        },
    }
})
