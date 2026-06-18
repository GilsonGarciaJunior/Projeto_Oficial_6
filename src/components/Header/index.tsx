import LogoImg from "../../assets/logo.jpeg"
import { HeaderContainer } from "./styles"

const Header = () => {
    return (
        <HeaderContainer className="container">            
            <h1>Restaurantes</h1>
            <img src={LogoImg} alt="Logo do Efood" />
            <h1>0 produto(s) no carrinho</h1>
        </HeaderContainer>
    )
}

export default Header