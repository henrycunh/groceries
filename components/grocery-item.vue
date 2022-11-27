<script lang="ts" setup>
import type { GroceryType } from '~~/types/grocery'
import { GroceryState } from '~~/types/grocery'

const props = defineProps<{ grocery: GroceryType }>()
const { $style } = useNuxtApp()

const buttonStyle = computed(() => {
    const colorMapping = ({
        [GroceryState.Low]: 'b-rose/20 bg-rose/10 text-rose-600',
        [GroceryState.Medium]: 'b-orange/20 bg-orange/10 text-orange-600',
        [GroceryState.High]: 'b-emerald/20 bg-emerald/10 text-emerald-600',
    })[props.grocery.state]
    return $style()
        .apply('p-1px rounded-2')
        .apply(colorMapping)
})

const itemStyle = computed(() => {
    const colorMapping = ({
        [GroceryState.Low]: 'bg-rose-100/60 text-rose-700',
        [GroceryState.Medium]: 'bg-orange-100/60 text-orange-700',
        [GroceryState.High]: 'bg-emerald-100/60 text-emerald-700',
    })[props.grocery.state]
    return $style()
        .apply('px-2 py-1')
        .apply(colorMapping)
})
</script>

<template>
    <div
        v-style-if="itemStyle" flex
        items-center p-2 text-14px
        rounded gap-2
    >
        <div
            v-style-if="buttonStyle"
        >
            <div i-carbon-subtract />
        </div>

        <div mr-auto>
            {{ grocery.name }}
        </div>

        <div
            v-style-if="buttonStyle"
        >
            <div i-carbon-add />
        </div>
    </div>
</template>
