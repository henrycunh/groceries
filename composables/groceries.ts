import { Grocery } from '~~/types/grocery'
import type { GroceryState, GroceryType } from '~~/types/grocery'

export const useGroceries = () => {
    const groceryList = useState<Grocery[]>(() => [])
    const listFilter = useState<'all' | 'to-buy'>(() => 'all' as const)

    const fetchGroceries = () => $fetch('/api/grocery')
        .then((data) => {
            groceryList.value = (data as GroceryType[]).map(grocery => new Grocery(grocery))
        })

    const addGrocery = async (grocery: { name: string; state?: GroceryState }) => {
        const newGrocery = new Grocery(grocery)
        const createdGrocery = await $fetch('/api/grocery', {
            method: 'POST',
            body: {
                name: newGrocery.name,
                state: newGrocery.state,
                updatedAt: newGrocery.updatedAt,
            },
        })
        groceryList.value.push(new Grocery(createdGrocery as GroceryType))
    }

    const deleteGrocery = async (key: string) => {
        const deletedGrocery = await $fetch(`/api/grocery/${key}`, {
            method: 'DELETE',
        })
        groceryList.value = groceryList.value.filter((grocery: GroceryType) => grocery.key !== key)
        return deletedGrocery as Grocery
    }

    return {
        fetchGroceries,
        groceryList,
        addGrocery,
        deleteGrocery,
        listFilter,
    }
}
