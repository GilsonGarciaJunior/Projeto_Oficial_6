import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type Entrega = {
    nome: string
    endereco: string
    complemento: string
    cidade: string
    cep: string
    numero: string
}


type Pagamento = {
    nomeCartao: string
    numeroCartao: string
    cvv: string
    mes: string
    ano: string
}


type CheckoutState = {
    entrega: Entrega | null
    pagamento: Pagamento | null
}


const initialState: CheckoutState = {
    entrega: null,
    pagamento: null
}

const CheckoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        salvarEntrega(
            state,
            action: PayloadAction<Entrega>
        ){
            state.entrega = action.payload
        },
        salvarPagamento(
            state,
            action: PayloadAction<Pagamento>
        ){
            state.pagamento = action.payload
        }
    }
})


export const {
    salvarEntrega,
    salvarPagamento
} = CheckoutSlice.actions


export default CheckoutSlice.reducer