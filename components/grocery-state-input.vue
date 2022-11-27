<script lang="ts" setup>
import { GroceryState } from '~~/types/grocery'

const props = defineProps<{ modelValue: number }>()
const emit = defineEmits(['update:modelValue'])
const { $style } = useNuxtApp()

const stateStyle = computed(() => {
    const leftMapping = ({
        [GroceryState.Low]: 'left-12px',
        [GroceryState.Medium]: 'left-46px',
        [GroceryState.High]: 'left-78px',
    })[props.modelValue]
    const colorMapping = ({
        [GroceryState.Low]: 'bg-rose-400',
        [GroceryState.Medium]: 'bg-orange-400',
        [GroceryState.High]: 'bg-emerald-400',
    })[props.modelValue]
    return $style()
        .apply('!absolute')
        .apply(leftMapping)
        .apply(colorMapping)
})

const onClick = (state: number) => {
    emit('update:modelValue', state)
}
</script>

<template>
    <div
        text-14px flex gap-4 children:py-1
        children:flex children:items-center children:cursor-pointer
        children:relative children:z-2
        px-4 py-1 relative
        rounded-lg transition-all
        bg-gray-200 dark:bg-dark-100
    >
        <div
            v-style-if="
                $style()
                    .apply(props.modelValue === GroceryState.Low
                        ? 'text-rose-900'
                        : 'text-gray-700 dark:text-gray-300',
                    )
            "
            transition
            @click="() => onClick(GroceryState.Low)"
        >
            <div i-carbon-thumbs-down-filled />
        </div>
        <div
            v-style-if="
                $style()
                    .apply(props.modelValue === GroceryState.Medium
                        ? 'text-orange-900'
                        : 'text-gray-700 dark:text-gray-300',
                    )
            "
            transition
            @click="() => onClick(GroceryState.Medium)"
        >
            <div i-carbon-thumbs-down />
        </div>
        <div
            v-style-if="
                $style()
                    .apply(props.modelValue === GroceryState.High
                        ? 'text-emerald-900'
                        : 'text-gray-700 dark:text-gray-300',
                    )
            "
            transition
            @click="() => onClick(GroceryState.High)"
        >
            <div i-carbon-thumbs-up-filled />
        </div>
        <div
            v-style-if="stateStyle"
            w-6 h-6 top-4px left-12px z-1
            rounded transition-all
        />
    </div>
</template>
