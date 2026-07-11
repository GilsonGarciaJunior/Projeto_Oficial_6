import { RestauranteCard } from '../../../models/CardRestaurante'
import {
    RestauranteDescription,
    RestauranteTag,
    Restaurante,
    Tag,
    TagInfo,
    Title,
    Nota
} from '../styles'

import { ButtonLink } from '../../Buttons/styles'
import NotaImg from '../../../assets/estrela.png'

type Props = {
    restaurante: RestauranteCard
}

const CardRestaurante = ({ restaurante }: Props) => {
    return (
        <Restaurante>
            <RestauranteTag>
                <img
                    src={restaurante.capa}
                    alt={restaurante.titulo}
                />
                <TagInfo>
                    {restaurante.destacado && (
                        <Tag>Destaque da Semana</Tag>
                    )}
                    <Tag>{restaurante.tipo}</Tag>
                </TagInfo>
            </RestauranteTag>
            <RestauranteDescription>
                <Title>
                    <h1>{restaurante.titulo}</h1>
                    <Nota>
                        <h1>{restaurante.avaliacao}</h1>
                        <img src={NotaImg} alt="" />
                    </Nota>
                </Title>
                <p>{restaurante.descricao}</p>
                <ButtonLink to={`/Perfil/${restaurante.id}`}>
                    Saiba Mais
                </ButtonLink>
            </RestauranteDescription>
        </Restaurante>
    )
}

export default CardRestaurante