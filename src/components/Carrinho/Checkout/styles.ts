import styled from 'styled-components'
import { IMaskInput } from 'react-imask'
import { BotaoContinuar } from '../styles'

export const Titulo = styled.h2`
    color: #ffe8d9;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;

    label {
        color: #ffe8d9;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 4px;
    }

    span {
        color: #ffe8d9;
        font-size: 11px;
        margin-top: 4px;
    }
`

export const MaskedInput = styled(IMaskInput)<{ $error?: boolean }>`
    width: 100%;
    padding: 8px;
    border: 2px solid ${({ $error }) =>
        $error ? '#f02121' : '#e66767'};
`

export const Row = styled.div`
    display: flex;
    gap: 8px;

    ${InputGroup} {
        flex: 1;
    }
`

export const BotaoVoltar = styled(BotaoContinuar)`
    margin-top: 8px;
`

export const Texto = styled.p`
    color: #ffe8d9;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
`

export const ErrorMessage = styled.span`
    color: #e66767;
    font-size: 12px;
    margin-top: 4px;
    display: block;
`

export const MensagemErro = styled.span`
    color: red;
    font-size: 12px;
    margin-top: 4px;
`