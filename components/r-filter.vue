<script lang="ts" setup>
const { listFilter } = useGroceries()

const currentFilter = computed(() => ({
    'all': 'All',
    'to-buy': 'To buy',
})[listFilter.value])

const onFilterChange = () => {
    const values = ['all', 'to-buy'] as const
    listFilter.value = values[(values.indexOf(listFilter.value) + 1) % values.length]
}
</script>

<template>
    <RButton @click="onFilterChange">
        {{ currentFilter }}
    </RButton>
</template>
