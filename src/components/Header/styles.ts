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

    a {
        text-decoration: none;
        color: #E66767;
        font-weight: bold;
    }
`

export const CarrinhoButton = styled.button`
    background: transparent;
    border: none;
    color: #E66767;
    font-weight: bold;
    cursor: pointer;
`