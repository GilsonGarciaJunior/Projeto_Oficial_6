import ProdutoImg from "../../assets/Produto.jpg"
import { Products, ProductsContainer } from "./styles"

const ProductsList = () => {
    return(
        <ProductsContainer className="container">
            <Products>
                <img src={ProdutoImg} alt="Foto do produto" />
                <h1>Pizza Marguerita</h1>
                <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                <button>Adicionar ao carrinho</button>
            </Products>
            <Products>
                <img src={ProdutoImg} alt="Foto do produto" />
                <h1>Pizza Marguerita</h1>
                <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                <button>Adicionar ao carrinho</button>
            </Products>
            <Products>
                <img src={ProdutoImg} alt="Foto do produto" />
                <h1>Pizza Marguerita</h1>
                <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                <button>Adicionar ao carrinho</button>
            </Products>
            <Products>
                <img src={ProdutoImg} alt="Foto do produto" />
                <h1>Pizza Marguerita</h1>
                <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                <button>Adicionar ao carrinho</button>
            </Products>
            <Products>
                <img src={ProdutoImg} alt="Foto do produto" />
                <h1>Pizza Marguerita</h1>
                <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                <button>Adicionar ao carrinho</button>
            </Products>
            <Products>
                <img src={ProdutoImg} alt="Foto do produto" />
                <h1>Pizza Marguerita</h1>
                <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                <button>Adicionar ao carrinho</button>
            </Products>
        </ProductsContainer>
    )
}

export default ProductsList