<script lang="ts" setup>
import { GroceryState } from '~~/types/grocery'
import type { Grocery } from '~~/types/grocery'

const props = defineProps<{ grocery: Grocery }>()

const { deleteGrocery } = useGroceries()
let loadingEdit = $ref(false)
let loadingDelete = $ref(false)

const backgroundColorClass = computed(() => ({
    [GroceryState.Low]: 'bg-red-50/70 active:bg-red-200 ring-red-500 text-red-900',
    [GroceryState.Medium]: 'bg-yellow-50/70 active:bg-yellow-200 ring-yellow-500 text-yellow-900',
    [GroceryState.High]: 'bg-green-50/70 active:bg-green-200 ring-green-500 text-green-900',
})[props.grocery.state])

const onDecrementState = () => {
    loadingEdit = true
    props.grocery.decrement().then(() => {
        loadingEdit = false
    })
}

const onDeleteGrocery = () => {
    loadingDelete = true
    deleteGrocery(props.grocery.key).then(() => {
        loadingDelete = false
    })
}
</script>

<template>
    <div
        px-3 active:scale-95 transition-duration-1500 expo-out
        py-6px
        :class="[
            backgroundColorClass,
            loadingEdit && 'op-90 ring-2 ring-inset',
            loadingDelete && 'op-90 ring-2 ring-inset ring-red',
        ]"
        @dblclick="onDecrementState"
    >
        <div flex items-center>
            <div>
                {{ grocery.name }}
            </div>
            <div i-fluent-emoji-cross-mark ml-auto cursor-pointer @click="onDeleteGrocery" />
        </div>
    </div>
</template>
