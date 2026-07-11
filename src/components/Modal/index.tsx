import { Produto } from '../../models/CardRestaurante'
import { BotaoCarrinho, Conteudo, Fechar, ModalContainer, Overlay } from './styles'
import { useDispatch } from 'react-redux'
import { add } from '../../store/Reducers/Carrinho'

type Props = {
    produto: Produto
    fechar: () => void
}

const Modal = ({ produto, fechar }: Props) => {
    const dispatch = useDispatch()

    return (
        <Overlay>
            <ModalContainer>                
                <img
                    src={produto.foto}
                    alt={produto.nome}
                />
                <Conteudo>
                    <h2>
                        {produto.nome}
                    </h2>
                    <p>
                        {produto.descricao}
                    </p>
                    <p>
                        Serve: {produto.porcao}
                    </p>
                    <BotaoCarrinho onClick={() => dispatch(add(produto))}>
                        Adicionar ao carrinho - R$ {produto.preco.toFixed(2)}
                    </BotaoCarrinho>
                </Conteudo>
                <Fechar onClick={fechar}>
                    X
                </Fechar>
            </ModalContainer>
        </Overlay>
    )
}

export default Modal