import { configureStore } from '@reduxjs/toolkit'

import Carrinho from './Reducers/Carrinho'
import Checkout from './Reducers/Checkout'

const store = configureStore({
    reducer: {
        Carrinho: Carrinho,
        Checkout: Checkout
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store
