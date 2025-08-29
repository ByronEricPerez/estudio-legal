type Miembro = {
  nombre: string
  puesto: string
  bio: string
}

export default function Equipo() {
  const miembros: Miembro[] = [
    { nombre: 'Dra. Ana Pérez', puesto: 'Socia fundadora — Civil & Comercial', bio: '15+ años de experiencia en litigios complejos y asesoría a pymes.' },
    { nombre: 'Dr. Lucas Gómez', puesto: 'Laboral & Seguridad Social', bio: 'Estrategias de prevención y resolución de conflictos laborales.' },
    { nombre: 'Dra. Sofía Ruiz', puesto: 'Familia & Sucesiones', bio: 'Enfoque humano para situaciones sensibles y acuerdos sostenibles.' },
  ]

  return (
    <section className="py-5">
      <div className="container">
        <h1 className="mb-4">Nuestro equipo</h1>
        <div className="row g-4">
          {miembros.map(m => (
            <div key={m.nombre} className="col-sm-6 col-lg-4">
              <div className="card h-100 card-hover">
                <div className="card-body">
                  <h5 className="card-title">{m.nombre}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{m.puesto}</h6>
                  <p className="card-text">{m.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}