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
    tipo: string
    descricao: string
    capa: string
    avaliacao: number
    destacado: boolean
    cardapio: Produto[]
}