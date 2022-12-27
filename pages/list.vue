<script lang="ts" setup>
import { GroceryState } from '~~/types/grocery'
const { fetchGroceries, addGrocery, groceryList, listFilter } = useGroceries()

await fetchGroceries()
let groceryName = $ref('')

const add = async () => {
    await addGrocery({ name: groceryName })
    groceryName = ''
}
</script>

<template>
    <div>
        <div flex items-center mb-4>
            <h1
                text-4xl font-bold text-primary-900
                items-center flex
            >
                <div i-fluent-emoji-croissant mr-3 />
                <div>
                    Roba
                </div>
            </h1>

            <RFilter ml-auto />
        </div>
        <div
            p-3
            my-2 class="bg-white shadow-xl shadow-primary-900/5" ring-3 ring-primary-50
            rounded-2
            shadow
        >
            <div
                v-if="groceryList.filter(grocery => listFilter === 'all' || grocery.state !== GroceryState.High).length"
                v-auto-animate
                mb-4
            >
                <div font-bold mb-2>
                    {{ listFilter === 'all' ? 'All groceries' : 'To buy' }}
                </div>
                <div v-auto-animate>
                    <RListItem
                        v-for="grocery in groceryList.filter(grocery => listFilter === 'all' || grocery.state !== GroceryState.High)"
                        :key="grocery.key"
                        :grocery="grocery"
                        first:rounded-t-2
                        last:rounded-b-2
                    />
                </div>
            </div>

            <div v-if="listFilter === 'to-buy'">
                <div font-bold mb-2>
                    All groceries
                </div>
                <div v-auto-animate>
                    <RListItem
                        v-for="grocery in groceryList.filter(grocery => grocery.state === GroceryState.High)"
                        :key="grocery.key"
                        :grocery="grocery"
                        first:rounded-t-2
                        last:rounded-b-2
                    />
                </div>
            </div>
        </div>

        <div
            flex justify-center mt-4 items-center
        >
            <input
                v-model="groceryName" type="text"
                b-3 b-primary-50 p-2 rounded-2 mr-2
                w-100 placeholder="New item"
                text-primary-900
                class="placeholder:text-primary-900/40"
                focus:ring-3
                ring-primary-100 outline-none
                expo-in transition

                @keyup.enter="add"
            >
            <RButton @click="add">
                Add
            </RButton>
        </div>
    </div>
</template>
