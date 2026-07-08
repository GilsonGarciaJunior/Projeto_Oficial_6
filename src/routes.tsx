import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Product from './pages/Product'

export const Rotas = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path='/Product/:id' element={<Product />} />
    </Routes>
)