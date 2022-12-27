import type { ConstructorType } from './common'

export enum GroceryState {
    Low = 0,
    Medium = 1,
    High = 2,
}

export class Grocery {
    key = ''
    name = ''
    state: GroceryState = GroceryState.Low
    updatedAt: string = new Date().toISOString()

    constructor(data: Partial<ConstructorType<Grocery>>) {
        Object.assign(this, data)
    }

    decrement() {
        if (this.state > 0)
            this.state = this.state - 1
        else
            this.state = GroceryState.High

        return this.update()
    }

    increment() {
        if (this.state < 2)
            this.state = this.state + 1
        else
            this.state = GroceryState.Low

        return this.update()
    }

    private update() {
        return $fetch(`/api/grocery/${this.key}`, {
            method: 'PATCH',
            body: {
                name: this.name,
                updatedAt: new Date().toISOString(),
                state: this.state,
            },
        })
    }
}

export type GroceryType = ConstructorType<Grocery>
