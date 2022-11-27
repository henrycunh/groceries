import { useStorage } from '@vueuse/core'
import type { Home } from '~~/types/home'

export const useHome = () => {
    const currentHome = useStorage<Home | null>('current-home', null)

    const createHome = async (body: { name: string; password: string }) => {
        return await useFetch('/api/home', { method: 'POST', body })
    }

    return { currentHome, createHome }
}
