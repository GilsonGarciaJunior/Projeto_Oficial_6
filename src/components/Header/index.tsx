import LogoImg from "../../assets/logo.jpeg"
import { CarrinhoButton, HeaderContainer, HeaderInfo } from "./styles"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { useDispatch } from 'react-redux'
import { open } from '../../store/Reducers/Carrinho'

const Header = () => {
    const itens = useSelector(
        (state: RootState) => state.Carrinho.items
    )

    const dispatch = useDispatch()

    return (
        <HeaderContainer className="container">
            <HeaderInfo>
                <Link to="/">
                    Restaurantes
                </Link>
                <img src={LogoImg} alt="Logo do Efood" />
                <CarrinhoButton  onClick={() => dispatch(open())}>
                    {itens.length} produto(s) no carrinho
                </CarrinhoButton>
            </HeaderInfo>            
        </HeaderContainer>
    )
}

export default Header