import styled from "styled-components";

export const RestauranteContainer = styled.div`
    background-color: #FFF8F2;
    max-width: 100%;
`

export const RestauranteInfo = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    max-width: 1336px;
`

export const RestauranteTag = styled.div`
    display: flex;
    justify-content: flex-end;

    img {
        position: relative;
        width: 100%;
        max-height: 217px;
    }
`

export const TagInfo = styled.div`
    position: absolute;
    margin-top: 16px;
    margin-right: 16px;
`

export const Tag = styled.span`
    color: #FFEBD9;
    font-size: 12px;
    font-weight: bold;
    padding: 6px 4px;
    background-color: #E66767;
    margin-left: 8px;
    text-transform: capitalize;
`;

export const RestauranteListagem = styled.ul`
    margin-top: 80px;
    justify-content: center;
    align-items: center;
    max-width: 1024px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
`

export const Restaurante = styled.li`
    margin: 30px 18px;
    max-width: 472px;
    align-items: center;
    background-color: #FFFFFF;

    img {
        width: 472px;
        height: 217px;
    }
`

export const RestauranteDescription = styled.div`
    width: 100%;
    max-width: 472px;
    background-color: #FFFFFF;
    padding: 8px;
    border-width: 0px 1px 1px 1px;
    border-style: solid;
    border-color: #E66767;
    
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