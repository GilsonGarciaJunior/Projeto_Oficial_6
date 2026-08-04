import { Formik, Form, Field } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup' 

import { close } from '../../../store/Reducers/Carrinho'

import {
    InputGroup,
    Row,
    Titulo,
    BotaoVoltar,
    MaskedInput
} from './styles'
import { Overlay, BotaoContinuar, Sidebar } from '../styles'

import { salvarPagamento } from '../../../store/Reducers/Checkout'
import { RootState } from '../../../store'


export type FormularioPagamento = {
    nomeCartao: string
    numeroCartao: string
    cvv: string
    mes: string
    ano: string
}

type PagamentoProps = {
    avancar: (pagamento: FormularioPagamento) => void
    voltar: () => void
}

const initialValues: FormularioPagamento = {
    nomeCartao: '',
    numeroCartao: '',
    cvv: '',
    mes: '',
    ano: ''
}



const Pagamento = ({ avancar, voltar }: PagamentoProps) => {
    const dispatch = useDispatch()

    const schema = Yup.object({
            nomeCartao: Yup.string().min(3, 'Nome muito curto').max(100, 'Nome muito longo').required(),
            numeroCartao: Yup.string().length(19, 'Número do cartão inválido').required(),
            cvv: Yup.string().length(3, 'CVV inválido').required(),
            mes: Yup.string().length(2, 'Mês inválido').required(),
            ano: Yup.string().length(4, 'Ano inválido').required()
        })
    
    const { items } = useSelector(
        (state: RootState) => state.Carrinho
    )

    const total = items.reduce(
        (acumulador, item) => acumulador + item.preco,
        0
    )


    return (
        <Overlay onClick={() => dispatch(close())}>
            <Sidebar onClick={(e) => e.stopPropagation()}>
                <Titulo>
                    Pagamento - Valor a pagar R$ {total.toFixed(2)}
                </Titulo>
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    validateOnChange={true}
                    validateOnBlur={true}
                    onSubmit={(values) => {
                        dispatch(salvarPagamento(values))
                        avancar(values)
                    }}
                >
                    {({values, handleChange})=>(
                        <Form>
                            <InputGroup>
                                <label>
                                    Nome no cartão
                                </label>
                                <Field name="nomeCartao">
                                    {({ field, meta }: any) => (
                                        <MaskedInput
                                            {...field}
                                            type="text"
                                            value={values.nomeCartao}
                                            $error={Boolean(meta.touched && meta.error)}
                                            onChange={handleChange}
                                        />                                        
                                    )}
                                </Field>
                            </InputGroup>
                            <Row>
                                <InputGroup>
                                    <label>
                                        Número do cartão
                                    </label>
                                    <Field name="numeroCartao">
                                        {({ field, form, meta }: any) => (
                                            <MaskedInput
                                                mask="0000 0000 0000 0000"
                                                value={field.value}
                                                onAccept={(value) => form.setFieldValue(field.name, value)}
                                                onBlur={field.onBlur}
                                                $error={Boolean(meta.touched && meta.error)}
                                            />
                                        )}
                                    </Field>
                                </InputGroup>
                                <InputGroup>
                                    <label>
                                        CVV
                                    </label>
                                    <Field name="cvv">
                                        {({ field, form, meta }: any) => (
                                            <MaskedInput
                                                mask="000"
                                                value={field.value}
                                                onAccept={(value) => form.setFieldValue(field.name, value)}
                                                onBlur={field.onBlur}
                                                $error={Boolean(meta.touched && meta.error)}
                                            />
                                        )}
                                    </Field>
                                </InputGroup>
                            </Row>                            
                            <Row>                            
                                <InputGroup>
                                    <label>
                                        Mês
                                    </label>
                                    <Field name="mes">
                                        {({ field, form, meta }: any) => (
                                            <MaskedInput
                                                mask="00"
                                                value={field.value}
                                                onAccept={(value) => form.setFieldValue(field.name, value)}
                                                onBlur={field.onBlur}
                                                $error={Boolean(meta.touched && meta.error)}
                                            />
                                        )}
                                    </Field>
                                </InputGroup>
                                <InputGroup>
                                    <label>
                                        Ano
                                    </label>
                                    <Field name="ano">
                                        {({ field, form, meta }: any) => (
                                            <MaskedInput
                                                mask="0000"
                                                value={field.value}
                                                onAccept={(value) => form.setFieldValue(field.name, value)}
                                                onBlur={field.onBlur}
                                                $error={Boolean(meta.touched && meta.error)}
                                            />
                                        )}
                                    </Field>
                                </InputGroup>
                            </Row>
                            <BotaoContinuar type="submit">
                                Finalizar compra
                            </BotaoContinuar>
                            <BotaoVoltar type="button" onClick={voltar}>
                                Voltar para a edição de endereço
                            </BotaoVoltar>
                        </Form>
                    )}
                </Formik>
            </Sidebar>
        </Overlay>
    )
}


export default Pagamento