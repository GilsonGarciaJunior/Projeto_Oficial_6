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

    @media (max-width: 1080px) {
        padding: 0 16px;
    }

    @media (max-width: 700px) {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-template-rows: auto auto;

        padding: 0 12px;

        img {
            grid-column: 1;
            grid-row: 1 / 3;
            width: 100px;
            height: auto;
        }

        a {
            grid-column: 2;
            grid-row: 1;
            justify-self: end;
            font-size: 14px;
        }
    }
`

export const CarrinhoButton = styled.button`
    background: transparent;
    border: none;
    color: #E66767;
    font-weight: bold;
    cursor: pointer;

    @media (max-width: 700px) {
        grid-column: 2;
        grid-row: 2;

        justify-self: end;
        font-size: 14px;
    }
`