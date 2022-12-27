import { Deta } from 'deta'

const deta = Deta('e0MTk3hFoA4k_mmo2ZNtNvZCr6aU65xpjiLJoaD7BvQHd')
export const db = deta.Base('groceries')

