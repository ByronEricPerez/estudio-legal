import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-top mt-5">
      <div className="container py-4">
        <div className="row gy-3 align-items-center">
          <div className="col-md">
            <div className="small text-muted">&copy; {new Date().getFullYear()} Estudio Jurídico — Todos los derechos reservados.</div>
          </div>
          <div className="col-md text-md-end">
            <Link to="/aviso-legal" className="small link-secondary">Aviso legal & Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}