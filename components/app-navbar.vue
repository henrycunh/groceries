<script lang="ts" setup>
const links = ref([
    { href: '/', text: 'what' },
])
</script>

<template>
    <div flex text-xl items-center op70 p-4 max-w-800px mx-auto>
        <nuxt-link
            to="/" text-2xl text-navy font-bold
            border-b-2 border-transparent
            transition-all
        >
            🥑 abacatario
        </nuxt-link>
        <div ml-auto flex items-center>
            <nuxt-link
                v-for="link in links" :key="link.text"
                :to="link.href"
                :text="link.text"
                border-b-2 border-transparent
                transition-all text-4
            />
            <DarkToggle ml-4 />
        </div>
    </div>
</template>
