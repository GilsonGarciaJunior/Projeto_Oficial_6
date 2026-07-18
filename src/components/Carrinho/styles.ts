import styled from 'styled-components'

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,.7);
    display: flex;
    justify-content: flex-end;
    z-index: 1;
`

export const Sidebar = styled.aside`
    width: 360px;
    background: #e66767;
    padding: 16px;
    overflow-y: auto;
`

export const CartItem = styled.div`
    display: flex;
    gap: 8px;
    background: #ffe8d9;
    padding: 8px;
    margin-bottom: 16px;

    img {
        width: 80px;
        height: 80px;
        object-fit: cover;
    }

    h3 {
        font-size: 18px;
        color: #e66767;
        margin-bottom: 8px;
    }

    span {
        display: block;
        margin-bottom: 12px;
        color: #e66767;
        font-size: 14px;
    }
`

export const BotaoRemover = styled.button`
    border: none;
    cursor: pointer;
    padding: 4px 8px;
    background: #e66767;
    color: #ffe8d9;
`

export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 24px 0;
    font-weight: bold;

    span {
        color: #ffe8d9;
    }
`

export const BotaoContinuar = styled.button`
    width: 100%;
    padding: 8px;
    border: none;
    cursor: pointer;
    background: #ffe8d9;
    color: #e66767;
    font-weight: bold;
`