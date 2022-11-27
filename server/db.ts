import { Deta } from 'deta'

const deta = Deta(process.env.DETA_KEY)
export const groceriesDB = deta.Base('abacatario')
