<script lang="ts" setup>
const emit = defineEmits(['click'])
const onClick = () => emit('click')
</script>

<template>
    <button
        text="3.5 white"
        font-bold
        bg="#FE4C4C hover:#F42A2A"
        rounded p="x-6 y-2.5" rounded-2 shadow="lg red-200 dark:red-900 active:none"
        transition
        flex
        items-center
        @click="onClick"
    >
        <slot />
    </button>
</template>
