import { db } from '../../db'
import type { GroceryType } from '~~/types/grocery'

export default defineEventHandler(async (event) => {
    const key = String(event.context.params.key)
    const update = await readBody(event)
    const grocery = await db.update(update, key)
    return grocery as any as GroceryType
})
