import { configureStore } from '@reduxjs/toolkit'

import Carrinho from './Reducers/Carrinho'

const store = configureStore({
    reducer: {
        Carrinho: Carrinho
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store
