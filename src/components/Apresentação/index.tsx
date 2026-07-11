import {
    ApresentaçãoContainer,
    ApresentaçãoInfo,
    TituloPrincipal,
    TituloSecundario
} from './styles'

import { RestauranteCard } from '../../models/CardRestaurante'

type Props = {
    restaurante: RestauranteCard
}

const Apresentacao = ({ restaurante }: Props) => {
    return (
        <ApresentaçãoContainer style={{ backgroundImage: `url(${restaurante.capa})` }}>
            <ApresentaçãoInfo>
                <TituloPrincipal>
                    {restaurante.tipo}
                </TituloPrincipal>
                <TituloSecundario>
                    {restaurante.titulo}
                </TituloSecundario>
            </ApresentaçãoInfo>
        </ApresentaçãoContainer>
    )
}

export default Apresentacao