import styled from "styled-components";

export const BTNInfo = styled.button`
    color: #FFEBD9;
    background-color: #E66767;
    width: 84px;
    height: 24px;
    border: none;
`

export const RestauranteContainer = styled.div`
    display: grid;
    padding: 0 270px;
    grid-template-columns: 1fr 1fr;
    background-color: #FFF8F2;
    max-width: 100%;
`

export const RestauranteInfo = styled.div`
    margin: 20px;
    padding: 0 18px;
    max-width: 472px;
    height: 398px;
    background-color: #FFFFFF;

    img {
        width: 472px;
        height: 217px;
    }

    h1 {
        font-weight: 700;
        font-style: bold;
        font-size: 18px;
        padding-bottom: 10px;
    }

    p {
        font-weight: 400px;
        font-size: 14px;
        padding-bottom: 24px;
    }
`