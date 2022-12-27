<script lang="ts" setup>
defineEmits(['click'])
</script>

<template>
    <button
        py-6px px-4
        bg-primary text-white rounded-2 ring-3 ring ring-primary-300
        @click="$emit('click')"
    >
        <slot />
    </button>
</template>
