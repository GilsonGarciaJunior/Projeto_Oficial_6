import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../types'

type CarrinhoState = {
    items: Produto[]
    isOpen: boolean
}

const initialState: CarrinhoState = {
    items: [],
    isOpen: false
}

const CarrinhoSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action: PayloadAction<Produto>) {
            const existe = state.items.find(
                item => item.id === action.payload.id
            )
            if (!existe) {
                state.items.push(action.payload)
            }
            state.isOpen = true
        },
        clear(state) {
            state.items = []
        },
        open(state) {
            state.isOpen = true
        },
        close(state) {
            state.isOpen = false
        },
        remove(state, action: PayloadAction<number>) {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            )
        }
    }
})

export const { add, remove, open, close, clear } = CarrinhoSlice.actions

export default CarrinhoSlice.reducer