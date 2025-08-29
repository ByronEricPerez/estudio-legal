import { Link, NavLink } from 'react-router-dom'
import logo from '@/assets/logo.svg'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top border-bottom" style={{ backgroundColor: "var(--azul-marino)" }}>
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2 text-white">
          <img src={logo} alt="Logo" width={28} height={28} />
          <span>Estudio Jurídico</span>
        </Link>

        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <NavLink to="/servicios" className="nav-link text-white">Servicios</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/equipo" className="nav-link text-white">Equipo</NavLink>
            </li>
            {/* Consulta Online destacado */}
            <li className="nav-item ms-lg-3">
              <Link to="/consulta-online" className="btn btn-primary px-3 py-1 fw-semibold" style={{ backgroundColor: "var(--dorado)", color: "var(--azul-marino)", border: "none" }}>
                Consulta Online
              </Link>
            </li>
            <li className="nav-item">
              <NavLink to="/contacto" className="nav-link text-white">Contacto</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/aviso-legal" className="nav-link text-white">Aviso legal</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
