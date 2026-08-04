import { useEffect, useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

import RestauranteItems  from "./RestauranteItems"

import { RestauranteContainer, RestauranteListagem, RestauranteInfo } from "./styles"

import { RestauranteCard } from "../../types"

const RestauranteList = () => {

    const [restaurantes, setRestaurantes] = useState<RestauranteCard[]>([])

    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
            .then((res) => res.json())
            .then((data: RestauranteCard[]) => {
                setRestaurantes(data)
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '400px'
                }}
            >
                <ClipLoader
                    color="#E66767"
                    size={60}
                />
            </div>
        )
    }

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