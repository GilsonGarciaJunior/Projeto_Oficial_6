import { RestauranteContainer, RestauranteListagem, RestauranteInfo } from "./styles"
import RestauranteJapImg from "../../assets/RestauranteJapao.jpg"
import RestauranteItalianoImg from "../../assets/RestauranteItaliano.png"
import RestauranteItems from "./RestauranteItems"
import RestauranteCard from "../../models/CardRestaurante"

const Restaurantes: RestauranteCard[] = [
    {
        id: 1,
        titulo: 'Hioki Sushi',
        categoria: 'Japonesa',
        descricao: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        foto: RestauranteJapImg,
        nota: 4.9,
        destaque: 'Destaque da Semana'
    },
    {
        id: 2,
        titulo: 'La Dolce Vita Trattoria',
        categoria: 'Italiana',
        descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        foto: RestauranteItalianoImg,
        nota: 4.6
    },
    {
        id: 3,
        titulo: 'La Dolce Vita Trattoria',
        categoria: 'Italiana',
        descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        foto: RestauranteItalianoImg,
        nota: 4.6
    },
    {
        id: 4,
        titulo: 'La Dolce Vita Trattoria',
        categoria: 'Italiana',
        descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        foto: RestauranteItalianoImg,
        nota: 4.6
    },
    {
        id: 5,
        titulo: 'La Dolce Vita Trattoria',
        categoria: 'Italiana',
        descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        foto: RestauranteItalianoImg,
        nota: 4.6
    },
    {
        id: 6,
        titulo: 'La Dolce Vita Trattoria',
        categoria: 'Italiana',
        descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        foto: RestauranteItalianoImg,
        nota: 4.6
    },
]


const RestauranteList = () => {
    return (
        <RestauranteContainer className="container">
            <RestauranteInfo>
                <RestauranteListagem>
                    {Restaurantes.map((item) => (
                        <RestauranteItems
                            key={item.id}
                            restaurante={item}
                        />
                    ))}
                </RestauranteListagem>
            </RestauranteInfo>
        </RestauranteContainer>
    )
}

export default RestauranteList