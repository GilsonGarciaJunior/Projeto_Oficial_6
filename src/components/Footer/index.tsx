import { FooterContainer, FooterInfo, RedesSociais } from "./styles"
import LogoEfood from "../../assets/logo.jpeg"
import Instagram from "../../assets/instagram_efood.jpg"
import Facebook from "../../assets/facebook_efood.jpg"
import Twitter from "../../assets/twitter_efood.jpg"

const Footer = () => {
    return (
        <FooterContainer className="container">
            <FooterInfo>
                <img src={LogoEfood} alt="" />
                <RedesSociais>
                    <img src={Instagram} alt="" />
                    <img src={Facebook} alt="" />
                    <img src={Twitter} alt="" />
                </RedesSociais>
                <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </p>
            </FooterInfo>
        </FooterContainer>
    )
}

export default Footer