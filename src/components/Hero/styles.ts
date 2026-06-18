import styled from "styled-components";
import FundoImg from "../../assets/fundo.png";

export const HeroContainer = styled.div`
    padding-top: 40px;
    justify-content: center;
    text-align: center;
    max-width: 100%;
    height: 384px;
    background-image: url(${FundoImg});

    img {
        width: 125px;
        height: 57px;
    }

    h1 {
        padding-top: 84px;
        font-size: 36px;
        font-weight: bold;
    }
`