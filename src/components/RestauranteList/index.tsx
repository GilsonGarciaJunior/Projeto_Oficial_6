import { RestauranteContainer, RestauranteDescription, Restaurante, RestauranteListagem, RestauranteInfo, RestauranteTag, Tag, TagInfo, Title, Nota } from "./styles"
import { ButtonLink } from "../Buttons/styles"
import RestauranteJapImg from "../../assets/RestauranteJapao.jpg"
import RestauranteItalianoImg from "../../assets/RestauranteItaliano.png"
import NotaImg from "../../assets/estrela.png"

const RestauranteList = () => {
    return (
        <RestauranteContainer className="container">
            <RestauranteInfo>
                <RestauranteListagem>
                    <Restaurante>
                        <RestauranteTag>
                            <img src={RestauranteJapImg} alt="Foto do Restaurante" />
                            <TagInfo>
                                <Tag>Destaque da Semana</Tag>
                                <Tag>Japonesa</Tag>
                            </TagInfo>
                        </RestauranteTag>
                        <RestauranteDescription>
                            <Title>
                                <h1>Hioki Sushi</h1>
                                <Nota>
                                    <h1>4.9</h1>
                                    <img src={NotaImg} alt="" />
                                </Nota>
                            </Title>
                            <p>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</p>
                            <ButtonLink to={'/Perfil'}>Saiba Mais</ButtonLink>
                        </RestauranteDescription>
                    </Restaurante>
                    <Restaurante>
                        <RestauranteTag>
                            <img src={RestauranteItalianoImg} alt="Foto do Restaurante" />
                            <TagInfo>
                                <Tag>Italiana</Tag>
                            </TagInfo>
                        </RestauranteTag>
                        <RestauranteDescription>
                            <Title>
                                <h1>La Dolce Vita Trattoria</h1>
                                <Nota>
                                    <h1>4.6</h1>
                                    <img src={NotaImg} alt="" />
                                </Nota>
                            </Title>
                            <p>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</p>
                            <ButtonLink to={'/Perfil'}>Saiba Mais</ButtonLink>
                        </RestauranteDescription>
                    </Restaurante>
                    <Restaurante>
                        <RestauranteTag>
                            <img src={RestauranteItalianoImg} alt="Foto do Restaurante" />
                            <TagInfo>
                                <Tag>Italiana</Tag>
                            </TagInfo>
                        </RestauranteTag>
                        <RestauranteDescription>
                            <Title>
                                <h1>La Dolce Vita Trattoria</h1>
                                <Nota>
                                    <h1>4.6</h1>
                                    <img src={NotaImg} alt="" />
                                </Nota>
                            </Title>
                            <p>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</p>
                            <ButtonLink to={'/Perfil'}>Saiba Mais</ButtonLink>
                        </RestauranteDescription>
                    </Restaurante>
                    <Restaurante>
                        <RestauranteTag>
                            <img src={RestauranteItalianoImg} alt="Foto do Restaurante" />
                            <TagInfo>
                                <Tag>Italiana</Tag>
                            </TagInfo>
                        </RestauranteTag>
                        <RestauranteDescription>
                            <Title>
                                <h1>La Dolce Vita Trattoria</h1>
                                <Nota>
                                    <h1>4.6</h1>
                                    <img src={NotaImg} alt="" />
                                </Nota>
                            </Title>
                            <p>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</p>
                            <ButtonLink to={'/Perfil'}>Saiba Mais</ButtonLink>
                        </RestauranteDescription>
                    </Restaurante>
                    <Restaurante>
                        <RestauranteTag>
                            <img src={RestauranteItalianoImg} alt="Foto do Restaurante" />
                            <TagInfo>
                                <Tag>Italiana</Tag>
                            </TagInfo>
                        </RestauranteTag>
                        <RestauranteDescription>
                            <Title>
                                <h1>La Dolce Vita Trattoria</h1>
                                <Nota>
                                    <h1>4.6</h1>
                                    <img src={NotaImg} alt="" />
                                </Nota>
                            </Title>
                            <p>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</p>
                            <ButtonLink to={'/Perfil'}>Saiba Mais</ButtonLink>
                        </RestauranteDescription>
                    </Restaurante>
                    <Restaurante>
                        <RestauranteTag>
                            <img src={RestauranteItalianoImg} alt="Foto do Restaurante" />
                            <TagInfo>
                                <Tag>Italiana</Tag>
                            </TagInfo>
                        </RestauranteTag>
                        <RestauranteDescription>
                            <Title>
                                <h1>La Dolce Vita Trattoria</h1>
                                <Nota>
                                    <h1>4.6</h1>
                                    <img src={NotaImg} alt="" />
                                </Nota>
                            </Title>
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