import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'


import Header from '../../components/Header'
import Apresentação from '../../components/Apresentação'
import ProductsList from '../../components/ProductsList'

import { RestauranteCard } from '../../types'
import { ClipLoader } from 'react-spinners'

const Perfil = () => {
    const { id } = useParams()

    const [restaurante, setRestaurante] = useState<RestauranteCard>()

    useEffect(() => {
        api.get(`/restaurantes/${id}`).then((response) => {
            setRestaurante(response.data)
        })
    }, [id])

    if (!restaurante) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
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
        <>
            <Header />
            <Apresentação restaurante={restaurante} />
            <ProductsList produtos={restaurante.cardapio}/>
        </>
    )
}

export default Perfil