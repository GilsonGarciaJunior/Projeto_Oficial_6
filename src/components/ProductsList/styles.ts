import styled from "styled-components";

export const ProductList = styled.div`
    background-color: #FFF8F2;
    margin: 56px 0;
`

export const ProductsContainer = styled.div`
    margin: 0 auto;
    max-width: 1024px;
`

export const Products = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
`

export const Product = styled.li`
    display: block;
    background-color: #E66767;
    max-width: 320px;
    max-height: 338px;
    padding: 8px;

    img {
        width: 304px;
        height: 167px;
    }
    
    h1 {
        color: #FFEBD9;
        margin-bottom: 8px;
        font-size: 16px;
        font-weight: bold;
    }

    p {
        color: #FFEBD9;
        margin-bottom: 8px;
        line-height: 22px;
        letter-spacing: 0px;
        font-size: 14px;
    }

    button {
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