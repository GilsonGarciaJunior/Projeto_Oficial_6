import { HeroContainer, HeroTitle } from "./styles"
import LogoEfood from "../../assets/logo.jpeg"

const Hero = () => {
    return (
        <HeroContainer className="container" >
            <img src={LogoEfood} alt="Logo Efood" />
            <HeroTitle>Viva experiências gastronômicas no conforto da sua casa</HeroTitle>
        </HeroContainer>
    )
}

export default Hero