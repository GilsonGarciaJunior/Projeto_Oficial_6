import { Formik, Form, Field } from 'formik'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'

import { close } from '../../../store/Reducers/Carrinho'

import {
    Titulo,
    InputGroup,
    Row,
    BotaoVoltar,
    MaskedInput
} from './styles'
import { BotaoContinuar, Overlay, Sidebar } from '../styles'

import { salvarEntrega } from '../../../store/Reducers/Checkout'

type EntregaProps = {
    avancar: () => void
    voltar: () => void
}

type FormularioEntrega = {
    nome: string
    endereco: string
    complemento: string
    cidade: string
    cep: string
    numero: string
}


const initialValues: FormularioEntrega = {
    nome: '',
    endereco: '',
    complemento: '',
    cidade: '',
    cep: '',
    numero: ''
}

const Entrega = ({ avancar, voltar }: EntregaProps) => {
    const dispatch = useDispatch()

    const schema = Yup.object({
        nome: Yup.string().min(3, 'Nome muito curto').max(100, 'Nome muito longo').required(),
        endereco: Yup.string().required(),
        complemento: Yup.string(),
        cidade: Yup.string().required(),
        cep: Yup.string().length(9, 'CEP inválido').required(),
        numero: Yup.string().length(5, 'Número inválido').required()
    })

    return (
        <Overlay onClick={() => dispatch(close())}>
            <Sidebar onClick={(e) => e.stopPropagation()}>
                <Titulo>
                    Entrega
                </Titulo>
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    validateOnChange={true}
                    validateOnBlur={true}
                    onSubmit={(values) => {
                        dispatch(
                            salvarEntrega(values)
                        )
                        avancar()
                    }}
                >
                    {({ values, handleChange}) => (
                        <Form>
                            <InputGroup>
                                <label>Quem irá receber</label>
                                <Field name="nome">
                                    {({ field, meta }: any) => (
                                        <MaskedInput
                                            {...field}
                                            type="text"
                                            $error={Boolean(meta.touched && meta.error)}
                                            value={values.nome}
                                            onChange={handleChange}
                                        />                                        
                                    )}
                                </Field>
                            </InputGroup>
                            <Row>
                                <InputGroup>
                                    <label>Endereço</label>
                                    <Field name="endereco">
                                        {({ field, meta }: any) => (
                                            <MaskedInput
                                                {...field}
                                                type="text"
                                                value={values.endereco}
                                                $error={Boolean(meta.touched && meta.error)}
                                                onChange={handleChange}
                                            />                                        
                                        )}
                                    </Field>
                                </InputGroup>
                            </Row>
                                <InputGroup>
                                    <label>Cidade</label>
                                    <Field name="cidade">
                                        {({ field, meta }: any) => (
                                            <MaskedInput
                                                {...field}
                                                type="text"
                                                value={values.cidade}
                                                $error={Boolean(meta.touched && meta.error)}
                                                onChange={handleChange}
                                            />                                        
                                        )}
                                    </Field>
                                </InputGroup>
                            <Row>
                                <InputGroup>
                                    <label>Número</label>
                                    <Field name="numero">
                                        {({ field, form, meta }: any) => (
                                            <MaskedInput
                                                mask="000-*"
                                                value={field.value}
                                                onAccept={(value) => form.setFieldValue(field.name, value)}
                                                onBlur={field.onBlur}
                                                $error={Boolean(meta.touched && meta.error)}
                                            />
                                        )}
                                    </Field>
                                </InputGroup>
                                <InputGroup>
                                    <label>CEP</label>
                                    <Field name="cep">
                                        {({ field, form, meta }: any) => (
                                            <MaskedInput
                                                mask="00000-000"
                                                value={field.value}
                                                onAccept={(value) => form.setFieldValue(field.name, value)}
                                                onBlur={field.onBlur}
                                                $error={Boolean(meta.touched && meta.error)}
                                            />
                                        )}
                                    </Field>
                                </InputGroup>
                            </Row>
                                <InputGroup>
                                    <label>Complemento</label>
                                    <MaskedInput
                                        type="text"
                                        name="complemento"
                                        value={values.complemento}
                                        onChange={handleChange}
                                    />
                                </InputGroup>
                            <BotaoContinuar type="submit">
                                Continuar com o pagamento
                            </BotaoContinuar>
                            <BotaoVoltar type="button" onClick={voltar}>
                                Voltar para o Carrinho
                            </BotaoVoltar>
                        </Form>
                    )}
                </Formik>
            </Sidebar>
        </Overlay>
    )
}

export default Entrega