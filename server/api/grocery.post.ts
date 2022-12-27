import { db } from '../db'
import type { GroceryType } from '~~/types/grocery'

export default defineEventHandler(async (event) => {
    const grocery: GroceryType = await readBody(event)
    const createdGrocery = await db.put(grocery)
    return createdGrocery as any as GroceryType
})
