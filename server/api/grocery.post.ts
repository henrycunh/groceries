import { groceriesDB } from '../db'
import type { GroceryType } from '~~/types/grocery'

export default defineEventHandler(async (event) => {
    const grocery: GroceryType = await useBody(event)
    const createdGrocery = await groceriesDB.put(grocery)
    return createdGrocery
})
