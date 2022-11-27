<script lang="ts" setup>
const { currentHome } = useHome()
// const { listGroceries } = useGroceryService()

// const { data: groceries } = await listGroceries()
</script>

<template>
    <div>
        <div v-if="currentHome === null">
            <div>
                <div font-bold text-gray-7 text-5>
                    Create a home
                </div>
                <input
                    type="text" a-input
                    placeholder="Home name"
                >
            </div>
        </div>
        {{ currentHome }}
    </div>
</template>
