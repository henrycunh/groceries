<script setup>
useHead({
    title: 'Roba',
    link: [
        {
            rel: 'icon', type: 'image/svg', href: 'https://api.iconify.design/fluent-emoji:croissant.svg?color=%230fbd3b',
        },
    ],
})
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
    height: 100vh;
    margin: 0;
    padding: 0;
}

html.dark {
    background: #222;
    color: white;
}
</style>
