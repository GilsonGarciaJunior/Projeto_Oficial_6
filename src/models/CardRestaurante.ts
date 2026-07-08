class RestauranteCard {
    id: number
    titulo: string
    categoria: string
    descricao: string
    foto: string
    nota: number
    destaque?: string

    constructor(
        id: number,
        titulo: string,
        categoria: string,
        descricao: string,
        foto: string,
        nota: number,
        destaque?: string
    ) {
        this.id = id
        this.titulo = titulo
        this.categoria = categoria
        this.descricao = descricao
        this.foto = foto
        this.nota = nota
        this.destaque = destaque
    }
}

export default RestauranteCard