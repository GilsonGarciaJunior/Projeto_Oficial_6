export type Produto = {
    id: number
    nome: string
    descricao: string
    foto: string
    preco: number
    porcao: string
}

export type RestauranteCard = {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: Produto[]
}

export type CartItem = Produto

export type Delivery = {
    receiver: string
    address: {
        description: string
        city: string
        zipCode: string
        number: number
        complement?: string
    }
}

export type Payment = {
    card: {
        name: string
        number: string
        code: number
        expires: {
        month: number
        year: number
        }
    }
}

export type CheckoutPayload = {
    products: {
        id: number
        price: number
    }[]
    delivery: Delivery
    payment: Payment
}

export type CheckoutResponse = {
    orderId: string
}