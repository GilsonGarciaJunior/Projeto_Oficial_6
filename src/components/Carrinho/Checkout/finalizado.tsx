import { useDispatch } from "react-redux"

import { BotaoContinuar, Overlay, Sidebar } from "../styles"
import { Texto, Titulo } from "./styles"

import { FinalizadoProps } from ".."

import { close } from '../../../store/Reducers/Carrinho'



const Finalizado = ({ pedidoId, voltar }: FinalizadoProps) => {
    const dispatch = useDispatch()

    const concluir = () => {
    dispatch(close())

    if (voltar) {
            voltar()
        }
    }


    return (
        <Overlay onClick={() => dispatch(close())}>
            <Sidebar onClick={(e) => e.stopPropagation()}>
                <Titulo>
                    Pedido realizado - {pedidoId}
                </Titulo>
                <Texto>
                    Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
                </Texto>
                <Texto>
                    Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
                </Texto>
                <Texto>
                    Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
                </Texto>
                <Texto>
                    Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
                </Texto>
                <BotaoContinuar onClick={concluir}>
                    Concluir
                </BotaoContinuar>
            </Sidebar>
        </Overlay>
    )
}


export default Finalizado