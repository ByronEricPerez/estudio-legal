import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section className="hero py-5">
        <div className="container py-3">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6">
              <h1 className="display-5 fw-semibold">Defendemos tus intereses con rigor y cercanía</h1>
              <p className="lead text-muted mt-3">
                Asesoría integral para empresas y particulares. Resolvemos conflictos de forma efectiva y transparente.
              </p>
              <div className="d-flex gap-3 mt-4">
                <Link to="/contacto" className="btn btn-primary btn-lg">Solicitar consulta</Link>
                <Link to="/servicios" className="btn btn-outline-primary btn-lg">Ver servicios</Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ratio ratio-16x9 rounded-4 border overflow-hidden">
                <iframe
                  src="https://www.youtube.com/watch?v=pCbY3s9zvtU"
                  title="Presentación"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="small text-muted mt-2">Video institucional (de ejemplo)</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="section-title">Áreas de práctica</h2>
          <div className="row g-4">
            {[
              { title: 'Derecho laboral', desc: 'Despidos, indemnizaciones, accidentes de trabajo.' },
              { title: 'Derecho civil y comercial', desc: 'Contratos, responsabilidad civil, cobros, mediaciones.' },
              { title: 'Familia y sucesiones', desc: 'Divorcios, alimentos, regímenes de coparentalidad, herencias.' },
              { title: 'Penal económico', desc: 'Defensa en causas complejas y compliance.' },
            ].map((item) => (
              <div key={item.title} className="col-md-6 col-lg-3">
                <div className="card h-100 card-hover">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text text-muted">{item.desc}</p>
                    <Link to="/servicios" className="stretched-link">Saber más</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-light border-top">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7">
              <h2 className="section-title">Por qué elegirnos</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Atención personalizada y comunicación clara.</li>
                <li className="list-group-item">Estrategias legales a medida, orientadas a resultados.</li>
                <li className="list-group-item">Honorarios transparentes y presupuesto previo.</li>
              </ul>
            </div>
            <div className="col-lg-5">
              <div className="p-4 bg-white rounded-4 border">
                <h5 className="mb-3">¿Necesitas ayuda?</h5>
                <p className="text-muted mb-3">Dejanos tu consulta y te contactamos a la brevedad.</p>
                <Link to="/contacto" className="btn btn-primary w-100">Enviar consulta</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}