import { RestauranteContainer, RestauranteListagem, RestauranteInfo } from "./styles"
import RestauranteItems from "./RestauranteItems"
import { useEffect, useState } from 'react'

const RestauranteList = () => {
    const [Restaurantes, setRestaurantes] = useState([])
    
    useEffect(() => {
        fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
            .then((resposta) => resposta.json())
            .then((dados) => {
                setRestaurantes(dados)
            })
    }, [])

    return (
        <RestauranteContainer className="container">
            <RestauranteInfo>
                <RestauranteListagem>
                    {Restaurantes.map((item) => (
                        <RestauranteItems
                            key={item.id}
                            nome={item.titulo}
                            imagem={item.capa}
                            descricao={item.descricao}
                            categoria={item.tipo}
                            nota={item.avaliacao}
                            destaque={item.destacado}
                        />
                    ))}
                </RestauranteListagem>
            </RestauranteInfo>
        </RestauranteContainer>
    )
}

export default RestauranteList