import styled from "styled-components";
import FundoImg from "../../assets/fundo.png";

export const HeroContainer = styled.div`
    height: 384px;
    max-width: 100%;
    background-image: url(${FundoImg});
    background-repeat: repeat;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-top: 48px;
        width: 125px;
        height: 57.5px;
    }
`

export const HeroTitle = styled.h1`
    margin-top: 138px;
    font-size: 36px;
    font-weight: 900;
    max-width: 539px;
    text-align: center;
`