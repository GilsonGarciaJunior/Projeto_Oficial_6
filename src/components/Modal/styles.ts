import { styled } from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0,0,0,.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`

export const ModalContainer = styled.div`
    width: 1024px;
    background-color: #E66767;
    padding: 32px;
    display: flex;
    gap: 24px;
    position: relative;

    img {
        width: 280px;
        height: 280px;
        object-fit: cover;

        flex-shrink: 0;
    }

    button {
        margin-top: auto;
    }
`

export const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    h2 {
        margin-bottom:16px;
        color: #FFEBD9;
    }

    p {
        color: #FFEBD9;
        margin-bottom:16px;
        line-height:22px;
    }
`

export const Fechar = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    background: transparent;
    border: none;
    color: #FFF;
    font-size: 18px;
    cursor: pointer;
`

export const BotaoCarrinho = styled.button`
    margin-top: auto;
    width: 218px;
    height: 24px;
    background-color: #FFEBD9;
    color: #E66767;
    border: none;
    font-weight: bold;
    cursor: pointer;
`