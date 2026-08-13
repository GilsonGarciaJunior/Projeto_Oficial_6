import styled from "styled-components";

export const ProductList = styled.div`
    background-color: #FFF8F2;
    margin: 56px 0;
`

export const ProductsContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;

    @media (max-width: 1120px) {
        max-width: 668px;
    }

    @media (max-width: 768px) {
        max-width: 700px;
    }

    @media (max-width: 480px) {
        max-width: 100%;
        padding: 0 16px;
    }
`

export const Products = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;

    @media (max-width: 1120px){
        grid-template-columns: 1fr 1fr;
        gap: 28px;
    }

    @media (max-width: 736px) {
        grid-template-columns: 1fr;
    }
`

export const Product = styled.li`
    width: 320px;
    display: flex;
    flex-direction: column;
    background-color: #E66767;
    padding: 8px;

    img {
        width: 304px;
        height: 167px;
    }
    
    h1 {
        color: #FFEBD9;
        margin: 8px 0;
        font-size: 16px;
        font-weight: bold;
    }

    p {
        color: #FFEBD9;
        line-height: 22px;
        font-size: 14px;
    }

    button {
        margin-top: auto;
        width: 100%;
        height: 24px;
        background-color: #FFEBD9;
        color: #E66767;
        border: none;
        cursor: pointer;
        font-weight: bold;
        font-size: 14px;
    }
`