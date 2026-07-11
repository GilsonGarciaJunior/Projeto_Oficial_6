import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../models/CardRestaurante'

type CarrinhoState = {
    items: Produto[]
    isOpen: boolean
}

const initialState: CarrinhoState = {
    items: [],
    isOpen: true
}

const CarrinhoSlice = createSlice({
    name: 'cart',

    initialState,

    reducers: {
        add(state, action: PayloadAction<Produto>) {
        state.items.push(action.payload)
        },

        open(state) {
            state.isOpen = true
        },

        remove(state, action: PayloadAction<number>) {
        state.items = state.items.filter(
            (item) => item.id !== action.payload
        )
        }
    }
})

export const { add, remove, open } = CarrinhoSlice.actions

export default CarrinhoSlice.reducer