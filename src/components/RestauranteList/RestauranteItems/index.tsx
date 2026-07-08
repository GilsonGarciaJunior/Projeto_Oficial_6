import RestauranteCard from '../../../models/CardRestaurante'
import { RestauranteDescription, Restaurante, RestauranteTag, Tag, TagInfo, Title, Nota } from "../styles"
import { ButtonLink } from "../../Buttons/styles"
import NotaImg from "../../../assets/estrela.png"

type Props = {
    restaurante: RestauranteCard
}

const CardRestaurante = ({ restaurante }: Props) => {
    return (
        <Restaurante>
            <RestauranteTag>
                <img
                src={restaurante.foto}
                alt={restaurante.titulo}
                />
                <TagInfo>
                    {restaurante.destaque && (
                        <Tag>{restaurante.destaque}</Tag>
                    )}
                    <Tag>{restaurante.categoria}</Tag>
                </TagInfo>
            </RestauranteTag>
            <RestauranteDescription>
                <Title>
                    <h1>{restaurante.titulo}</h1>
                    <Nota>
                        <h1>{restaurante.nota}</h1>
                        <img src={NotaImg} alt="" />
                    </Nota>
                </Title>
                <p>{restaurante.descricao}</p>
                <ButtonLink to="/Perfil">
                Saiba Mais
                </ButtonLink>
            </RestauranteDescription>
        </Restaurante>
    )
}

export default CardRestaurante