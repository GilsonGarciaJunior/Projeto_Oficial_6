import { ApresentaçãoContainer, TituloPrincipal, TituloSecundario } from "./styles"

const Apresentação = () => {
    return (
        <ApresentaçãoContainer className="container">
            <TituloPrincipal>Italiana</TituloPrincipal>
            <TituloSecundario>La Dolce Vita Trattoria</TituloSecundario>
        </ApresentaçãoContainer>
    )
}

export default Apresentação