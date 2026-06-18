import { HeroContainer } from "./styles"
import LogoEfood from "../../assets/logo.jpeg"

const Hero = () => {
    return (
        <HeroContainer className="container" >
            <img src={LogoEfood} alt="Logo Efood" />
            <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
        </HeroContainer>
    )
}

export default Hero