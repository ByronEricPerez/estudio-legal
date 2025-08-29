import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Equipo from './pages/Equipo'
import ConsultaOnline from './pages/ConsultaOnline'
import Contacto from './pages/Contacto'
import AvisoLegal from './pages/AvisoLegal'

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path='/consulta-online' element={<ConsultaOnline />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}