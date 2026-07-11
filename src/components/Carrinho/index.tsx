import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { useDispatch } from 'react-redux'
import { remove } from '../../store/Reducers/Carrinho'

const Carrinho = () => {
    const itens = useSelector(
        (state: RootState) => state.Carrinho.items
    )

    const dispatch = useDispatch()

    return (
        <aside>
            <h2>
                Carrinho
            </h2>
            <p>
                {itens.length} produto(s)
            </p>
            <ul>
                {itens.map((item) => (
                    <li key={item.id}>
                        <img
                            src={item.foto}
                            alt={item.nome}
                        />
                        <h3>
                            {item.nome}
                        </h3>
                        <p>
                            R$ {item.preco.toFixed(2)}
                        </p>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Carrinho