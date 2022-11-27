<script lang="ts" setup>
import { GroceryState } from '~~/types/grocery'
import type { GroceryType } from '~~/types/grocery'

const grocery = reactive<Pick<GroceryType, 'name' | 'state'>>({
    name: '',
    state: GroceryState.Low,
})

const isLoadingCreation = ref(false)

const onAdd = async () => {
    const { createGrocery } = useGroceryStore()
    const payload: Omit<GroceryType, 'id'> = {
        ...unref(grocery),
        updatedAt: new Date().toISOString(),
    }
    const { data } = await createGrocery(payload)
    console.log(data)
}
</script>

<template>
    <div flex-col w-full bg-gray-100 dark:bg-dark-200 px-2 py-1 transition rounded items-center>
        <div>
            <input
                v-model="grocery.name" type="text"
                b-2 dark:b-dark-100 b-gray-300 rounded-2
                px-2
                bg-transparent
                placeholder="Nome"
            >
        </div>
        <div>
            <grocery-state-input v-model="grocery.state" ml-auto />
        </div>
        <Button ml-2 w-full box-border @click="onAdd">
            <div v-if="isLoadingCreation" i-eos-icons-loading mr-1 />
            {{ isLoadingCreation ? 'Adicionando...' : 'Adicionar' }}
        </Button>
    </div>
</template>
