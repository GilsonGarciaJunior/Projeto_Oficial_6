import { RestauranteContainer, RestauranteDescription, Restaurante, RestauranteListagem, RestauranteInfo, RestauranteTag, Tag, TagInfo } from "./styles"
import { ButtonLink } from "../Buttons/styles"
import RestauranteImg from "../../assets/Restaurante.jpg"

const RestauranteList = () => {
    return (
        <RestauranteContainer className="container">
            <RestauranteInfo>
                <RestauranteListagem>
                    <Restaurante>
                        <RestauranteTag>
                            <img src={RestauranteImg} alt="Foto do Restaurante" />
                            <TagInfo>
                                <Tag>Destaque da Semana</Tag>
                                <Tag>Japonesa</Tag>
                            </TagInfo>
                        </RestauranteTag>
                        <RestauranteDescription>
                            <h1>Hioki Sushi </h1>
                            <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!</p>
                            <ButtonLink to={'/Perfil'}>Saiba Mais</ButtonLink>
                        </RestauranteDescription>
                    </Restaurante>
                    <Restaurante>
                        <RestauranteTag>
                            <img src={RestauranteImg} alt="Foto do Restaurante" />
                            <TagInfo>
                                <Tag>Japonesa</Tag>
                            </TagInfo>
                        </RestauranteTag>
                        <RestauranteDescription>
                            <h1>Hioki Sushi </h1>
                            <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!</p>
                            <ButtonLink to={'/Perfil'}>Saiba Mais</ButtonLink>
                        </RestauranteDescription>
                    </Restaurante>
                    <Restaurante>
                        <RestauranteTag>
                            <img src={RestauranteImg} alt="Foto do Restaurante" />
                            <TagInfo>
                                <Tag>Japonesa</Tag>
                            </TagInfo>
                        </RestauranteTag>
                        <RestauranteDescription>
                            <h1>Hioki Sushi </h1>
                            <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!</p>
                            <ButtonLink to={'/Perfil'}>Saiba Mais</ButtonLink>
                        </RestauranteDescription>
                    </Restaurante>
                    <Restaurante>
                        <RestauranteTag>
                            <img src={RestauranteImg} alt="Foto do Restaurante" />
                            <TagInfo>
                                <Tag>Japonesa</Tag>
                            </TagInfo>
                        </RestauranteTag>
                        <RestauranteDescription>
                            <h1>Hioki Sushi </h1>
                            <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!</p>
                            <ButtonLink to={'/Perfil'}>Saiba Mais</ButtonLink>
                        </RestauranteDescription>
                    </Restaurante>
                    <Restaurante>
                        <RestauranteTag>
                            <img src={RestauranteImg} alt="Foto do Restaurante" />
                            <TagInfo>
                                <Tag>Japonesa</Tag>
                            </TagInfo>
                        </RestauranteTag>
                        <RestauranteDescription>
                            <h1>Hioki Sushi </h1>
                            <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!</p>
                            <ButtonLink to={'/Perfil'}>Saiba Mais</ButtonLink>
                        </RestauranteDescription>
                    </Restaurante>
                    <Restaurante>
                        <RestauranteTag>
                            <img src={RestauranteImg} alt="Foto do Restaurante" />
                            <TagInfo>
                                <Tag>Japonesa</Tag>
                            </TagInfo>
                        </RestauranteTag>
                        <RestauranteDescription>
                            <h1>Hioki Sushi </h1>
                            <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!</p>
                            <ButtonLink to={'/Perfil'}>Saiba Mais</ButtonLink>
                        </RestauranteDescription>
                    </Restaurante>
                </RestauranteListagem>
            </RestauranteInfo>
        </RestauranteContainer>
    )
}

export default RestauranteList