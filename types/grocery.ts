import type { ConstructorType } from './common'

export class Grocery {
    id: string
    name: string
    state: GroceryState
    updatedAt: string

    decrement() {
        if (this.state > 0)
            this.state = this.state - 1
    }

    increment() {
        if (this.state < 2)
            this.state = this.state + 1
    }
}

export enum GroceryState {
    Low = 0,
    Medium = 1,
    High = 2,
}

export type GroceryType = ConstructorType<Grocery>
