<script lang="ts" setup>
const emit = defineEmits(['click'])
const onClick = () => emit('click')
</script>

<template>
    <button
        text-14px text-white
        font-bold
        bg-emerald-600
        rounded px-3 py-6px rounded-2
        transition
        flex
        items-center
        @click="onClick"
    >
        <slot />
    </button>
</template>
