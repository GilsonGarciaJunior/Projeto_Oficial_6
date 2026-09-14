import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { RootState } from '../../store'
import { close, remove, clear } from '../../store/Reducers/Carrinho'

import api from '../../services/api'

import Lixeira from '../../assets/lixeira-de-reciclagem.png'

import * as S from './styles'

import Entrega from './Checkout/entrega'
import Pagamento, { FormularioPagamento } from './Checkout/pagamento'
import Finalizado from './Checkout/finalizado'

export type FinalizadoProps = {
    pedidoId: string
    voltar: () => void
}

const Carrinho = () => {
    const dispatch = useDispatch()

    const [pedidoId, setPedidoId] = useState('')

    const [etapa, setEtapa] = useState<
        'carrinho' | 'entrega' | 'pagamento' | 'finalizado'
    >('carrinho')

    const { items, isOpen } = useSelector(
        (state: RootState) => state.Carrinho
    )

    const checkout = useSelector(
        (state: RootState) => state.Checkout
    )

    const total = items.reduce(
        (acumulador, item) => acumulador + item.preco,
        0
    )

    if (!isOpen) return null
    const finalizarPedido = async (pagamento: FormularioPagamento) => {
        try {
        const dados = {
            products: items.map((item) => ({
                id: item.id,
                price: item.preco
            })),

            delivery: {
            receiver: checkout.entrega?.nome || '',
            address: {
                description: checkout.entrega?.endereco || '',
                city: checkout.entrega?.cidade || '',
                zipCode: checkout.entrega?.cep || '',
                number: Number(checkout.entrega?.numero) || 0,
                complement: checkout.entrega?.complemento || ''
            }
            },

            payment: {
                card: {
                    name: pagamento.nomeCartao || '',
                    number: pagamento.numeroCartao || '',
                    code: Number(pagamento.cvv) || 0,
                    expires: {
                        month: Number(pagamento.mes) || 0,
                        year: Number(pagamento.ano) || 0
                    }
                }
            }
        }

        const resposta = await api.post('/checkout', dados)

        setPedidoId(resposta.data.orderId)
        dispatch(clear())
        setEtapa('finalizado')
        } catch (erro) {
            if (axios.isAxiosError(erro)) {
                console.error('Erro da API:', erro.response?.data)
                console.error('Status:', erro.response?.status)
            } else {
                console.error('Erro inesperado:', erro)
            }
        }
    }

    return (
        <S.Overlay onClick={() => dispatch(close())}>
            <S.Sidebar onClick={(e) => e.stopPropagation()}>
                {etapa === 'carrinho' && (
                    <>
                        {items.length === 0 ? (
                            <p>Seu carrinho está vazio.</p>
                            ) : (
                            <>
                                {items.map((item) => (
                                    <S.CartItem key={item.id}>
                                        <img src={item.foto} alt={item.nome} />
                                        <div>
                                        <h3>{item.nome}</h3>
                                        <span>
                                            R$ {item.preco.toFixed(2)}
                                        </span>
                                        </div>
                                        <S.BotaoRemover
                                        onClick={() => dispatch(remove(item.id))}
                                        >
                                        <img
                                            src={Lixeira}
                                            alt="Remover produto"
                                        />
                                        </S.BotaoRemover>
                                    </S.CartItem>
                                ))}
                                <S.Total>
                                <span>Valor total</span>
                                <span>
                                    R$ {total.toFixed(2)}
                                </span>
                                </S.Total>
                                <S.BotaoContinuar
                                onClick={() => setEtapa('entrega')}
                                >
                                    Continuar com a entrega
                                </S.BotaoContinuar>
                            </>
                        )}
                    </>
                )}
                    {etapa === 'entrega' && (
                    <Entrega
                        voltar={() => setEtapa('carrinho')}
                        avancar={() => setEtapa('pagamento')}
                    />
                )}
                {etapa === 'pagamento' && (
                    <Pagamento
                        voltar={() => setEtapa('entrega')}
                        avancar={finalizarPedido}
                    />
                )}
                {etapa === 'finalizado' && (
                    <Finalizado
                        pedidoId={pedidoId}
                        voltar={() => setEtapa('carrinho')}
                    />
                )}
            </S.Sidebar>
        </S.Overlay>
    )
}

export default Carrinho