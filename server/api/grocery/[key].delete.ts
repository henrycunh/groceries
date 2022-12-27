import { db } from '../../db'
import type { GroceryType } from '~~/types/grocery'

export default defineEventHandler(async (event) => {
    const key = event.context.params.key
    const grocery = await db.delete(key)
    return grocery as any as GroceryType
})
