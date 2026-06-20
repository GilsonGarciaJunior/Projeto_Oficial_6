import { RestauranteContainer, RestauranteDescription, RestauranteInfo } from "./styles"
import { ButtonLink } from "../Buttons/styles"
import RestauranteImg from "../../assets/Restaurante.jpg"

const RestauranteList = () => {
    return (
        <RestauranteContainer className="container">
            <RestauranteInfo>
                <img src={RestauranteImg} alt="Foto do Restaurante" />
                <RestauranteDescription>
                    <h1>Hioki Sushi </h1>
                    <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!</p>
                    <ButtonLink to={'/Perfil'}>Saiba Mais</ButtonLink>
                </RestauranteDescription>
            </RestauranteInfo>
            <RestauranteInfo>
                <img src={RestauranteImg} alt="Foto do Restaurante" />
                <RestauranteDescription>
                    <h1>Hioki Sushi </h1>
                    <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!</p>
                    <ButtonLink to={'/Perfil'}>Saiba Mais</ButtonLink>
                </RestauranteDescription>
            </RestauranteInfo>
            <RestauranteInfo>
                <img src={RestauranteImg} alt="Foto do Restaurante" />
                <RestauranteDescription>
                    <h1>Hioki Sushi </h1>
                    <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!</p>
                    <ButtonLink to={'/Perfil'}>Saiba Mais</ButtonLink>
                </RestauranteDescription>
            </RestauranteInfo>
            <RestauranteInfo>
                <img src={RestauranteImg} alt="Foto do Restaurante" />
                <RestauranteDescription>
                    <h1>Hioki Sushi </h1>
                    <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!</p>
                    <ButtonLink to={'/Perfil'}>Saiba Mais</ButtonLink>
                </RestauranteDescription>
            </RestauranteInfo>
            <RestauranteInfo>
                <img src={RestauranteImg} alt="Foto do Restaurante" />
                <RestauranteDescription>
                    <h1>Hioki Sushi </h1>
                    <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!</p>
                    <ButtonLink to={'/Perfil'}>Saiba Mais</ButtonLink>
                </RestauranteDescription>
            </RestauranteInfo>
            <RestauranteInfo>
                <img src={RestauranteImg} alt="Foto do Restaurante" />
                <RestauranteDescription>
                    <h1>Hioki Sushi </h1>
                    <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!</p>
                    <ButtonLink to={'/Perfil'}>Saiba Mais</ButtonLink>
                </RestauranteDescription>
            </RestauranteInfo>
        </RestauranteContainer>
    )
}

export default RestauranteList