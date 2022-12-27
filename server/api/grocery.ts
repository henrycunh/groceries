import { db } from '../db'
import type { GroceryType } from '~~/types/grocery'

export default defineEventHandler(async () => {
    const groceries = await db.fetch()
    return groceries.items as any as GroceryType[]
})
