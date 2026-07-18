import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { close, remove } from '../../store/Reducers/Carrinho'

import {
    Overlay,
    Sidebar,
    CartItem,
    Total,
    BotaoContinuar,
    BotaoRemover
} from './styles'

const Carrinho = () => {
    const dispatch = useDispatch()

    const { items, isOpen } = useSelector(
        (state: RootState) => state.Carrinho
    )

    const total = items.reduce(
        (acumulador, item) => acumulador + item.preco,
        0
    )

    if (!isOpen) return null

    return (
        <Overlay onClick={() => dispatch(close())}>
        <Sidebar onClick={(e) => e.stopPropagation()}>
            {items.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
            ) : (
            <>
            {items.map((item) => (
                <CartItem key={item.id}>
                    <img src={item.foto} alt={item.nome} />
                    <div>
                        <h3>{item.nome}</h3>
                        <span>
                            R$ {item.preco.toFixed(2)}
                        </span>
                        <BotaoRemover
                            onClick={() => dispatch(remove(item.id))}
                        >
                            Remover
                        </BotaoRemover>
                    </div>
                </CartItem>
                ))}
                <Total>
                    <span>Valor total</span>
                    <span>
                        R$ {total.toFixed(2)}
                    </span>
                </Total>
                <BotaoContinuar>
                    Continuar com a entrega
                </BotaoContinuar>
            </>
            )}
        </Sidebar>
        </Overlay>
    )
}

export default Carrinho