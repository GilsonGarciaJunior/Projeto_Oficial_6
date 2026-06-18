import styled from "styled-components";
import FundoImg from "../../assets/fundo.png"

export const HeaderContainer = styled.div`
    display: flex;
    background-image: url(${FundoImg});
    align-items: center;
    justify-content: space-between;
    text-align: center;
    padding: 0 400px;
    max-width: 100%;
    height: 200px;

    img {
        width: 125px;
        height: 57px;
    }

    h1 {
        font-weight: 900;
        font-size: 24px;
    }
`