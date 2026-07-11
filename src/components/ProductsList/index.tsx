import { useState } from "react"
import { Produto } from "../../models/CardRestaurante"
import { Product, Products, ProductsContainer, ProductList } from "./styles"
import Modal from "../Modal"

type Props = {
    produtos: Produto[]
}

const ProductsList = ({produtos}: Props) => {
    const [produtoSelecionado, setProdutoSelecionado] =
        useState<Produto | null>(null)

    return(
        <ProductList>
            <ProductsContainer className="container">
                    <Products className="containerPerfl">
                        {produtos.map((produto) => (
                            <Product
                                key={produto.id}
                            >
                                <img
                                    src={produto.foto}
                                    alt={produto.nome}
                                />
                                <h1>
                                    {produto.nome}
                                </h1>
                                <p>
                                    {produto.descricao}
                                </p>
                                <button onClick={() => setProdutoSelecionado(produto)}>
                                    Adicionar ao carrinho
                                </button>
                            </Product>
                        ))}
                        {produtoSelecionado && (
                            <Modal
                                produto={produtoSelecionado}
                                fechar={() => setProdutoSelecionado(null)}
                            />
                        )}
                    </Products>    
            </ProductsContainer>
        </ProductList>
    )
}

export default ProductsList