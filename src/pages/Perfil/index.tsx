import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Apresentação from '../../components/Apresentação'
import ProductsList from '../../components/ProductsList'

import { RestauranteCard } from '../../models/CardRestaurante'

const Perfil = () => {
    const { id } = useParams()

    console.log('ID da rota:', id)

    const [restaurante, setRestaurante] =
        useState<RestauranteCard>()

    useEffect(() => {
        fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
            .then((res) => res.json())
            .then((dados: RestauranteCard[]) => {
                const restauranteEncontrado = dados.find(
                    (item) => item.id === Number(id)
                )

                setRestaurante(restauranteEncontrado)
            })
    }, [id])

    if (!restaurante) {
        return <h2>Carregando...</h2>
    }

    return (
        <>
            <Header />
            <Apresentação restaurante={restaurante} />
            <ProductsList produtos={restaurante.cardapio}/>
        </>
    )
}

export default Perfil