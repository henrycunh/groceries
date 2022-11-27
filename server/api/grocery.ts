import { groceriesDB } from '../db'

export default defineEventHandler(async () => {
    const groceries = await groceriesDB.fetch()
    return groceries
})
