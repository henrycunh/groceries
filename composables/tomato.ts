export const useTomato = () => useState<number>('tomato-count', () => 0)
export const sellTomato = () => useTomato().value += 1