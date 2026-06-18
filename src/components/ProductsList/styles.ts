import styled from "styled-components";

export const ProductsContainer = styled.div`
    padding: 60px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

export const Products = styled.div`
    padding: 20px 10px;
    margin: 10px;
    background-color: #E66767;

    h1,
    p {
        color: #FFEBD9;
    }

    h1 {
        font-weight: 900;
        font-size: 16px;
    }

    p {
        padding: 10px 0;
        font-weight: 400;
        font-size: 14px;
    }

    button {
        font-size: 14px;
        font-weight: 700;
        width: 100%;
        height: 24px;
        background-color: #FFEBD9;
        border: none;
    }
`