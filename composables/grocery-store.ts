import { acceptHMRUpdate, defineStore } from 'pinia'
import type { GroceryType } from '~~/types/grocery'

export const useGroceryStore = defineStore('grocery', {
    state: () => ({
        groceries: [],
    } as GroceryStoreState),
    actions: {
        async listGroceries() {
            const { listGroceries } = useGroceryService()
            const groceries = await listGroceries()
            this.groceries = groceries.data.value.items as GroceryType[]
            return groceries
        },

        async createGrocery(grocery: Omit<GroceryType, 'id'>) {
            const { createGrocery } = useGroceryService()
            const createdGrocery = await createGrocery(grocery)
            console.log({ createdGrocery })
            this.groceries.push(createdGrocery.data.value.last as GroceryType)
            return createdGrocery
        },
    },
})

interface GroceryStoreState {
    groceries: GroceryType[]
}

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useGroceryStore, import.meta.hot))
