import type { GroceryType } from '~~/types/grocery'

export const useGroceryService = () => {
    const listGroceries = async () => {
        return await useFetch('/api/grocery')
    }

    const createGrocery = async (grocery: Omit<GroceryType, 'id'>) => {
        return await useFetch('/api/grocery', { method: 'POST', body: grocery })
    }

    return { listGroceries, createGrocery }
}
