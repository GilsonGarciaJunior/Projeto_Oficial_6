import styled from "styled-components";
import FundoImg from "../../assets/FundoApresentação.jpg"

export const ApresentaçãoContainer = styled.div`
    display: flex;
    background-image: url(${FundoImg});
    position: relative;
    background-size: cover;
    max-width: 100%;
    height: 280px;

    &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        content: '';
    }

    h1 {
        margin: 20px 0;
        font-size: 32px;
        color: #FFFFFF;
        z-index: 1;
    }
`

export const ApresentaçãoInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    max-width: 1024px;
`

export const TituloPrincipal = styled.h1`
    font-weight: 100;
`

export const TituloSecundario = styled.h1`
    font-weight: 900;
`