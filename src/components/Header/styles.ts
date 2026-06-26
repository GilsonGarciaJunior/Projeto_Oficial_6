import styled from "styled-components";
import FundoImg from "../../assets/fundo.png"

export const HeaderContainer = styled.div`
    display: flex;
    background-image: url(${FundoImg});
    max-width: 100%;
    height: 200px;
`

export const HeaderInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    max-width: 1024px;

    img {
        width: 125px;
        height: 57px;
    }

    h1 {
        font-weight: 900;
        font-size: 24px;
    }
`