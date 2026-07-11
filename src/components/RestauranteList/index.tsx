import { RestauranteContainer, RestauranteListagem, RestauranteInfo } from "./styles"
import RestauranteItems  from "./RestauranteItems"
import { useEffect, useState } from 'react'
import { RestauranteCard } from "../../models/CardRestaurante"

const RestauranteList = () => {

    const [restaurantes, setRestaurantes] = useState<RestauranteCard[]>([])
    
    useEffect(() => {
        fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
            .then((res) => res.json())
            .then((data: RestauranteCard[]) => {
                setRestaurantes(data)
            })
    }, [])

    return (
        <RestauranteContainer className="container">
            <RestauranteInfo>
                <RestauranteListagem>
                    {restaurantes.map((restaurante) => (
                        <RestauranteItems
                            key={restaurante.id}
                            restaurante={restaurante}
                        />
                    ))}
                </RestauranteListagem>
            </RestauranteInfo>
        </RestauranteContainer>
    )
}

export default RestauranteList