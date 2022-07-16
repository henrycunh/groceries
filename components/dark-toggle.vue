<script setup lang="ts">
const color = useColorMode()
function toggleDark() {
    color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
    <button class="!outline-none" @click="toggleDark">
        <div dark:i-carbon-moon i-carbon-sun hover:rotate--25 active:rotate-10 transition-all />
    </button>
</template>
