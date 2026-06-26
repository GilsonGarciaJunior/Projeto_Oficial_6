import { ApresentaçãoContainer, ApresentaçãoInfo, TituloPrincipal, TituloSecundario } from "./styles"

const Apresentação = () => {
    return (
        <ApresentaçãoContainer className="container">
            <ApresentaçãoInfo>
                <TituloPrincipal>Italiana</TituloPrincipal>
                <TituloSecundario>La Dolce Vita Trattoria</TituloSecundario>
            </ApresentaçãoInfo>
        </ApresentaçãoContainer>
    )
}

export default Apresentação