import { useState } from 'react'

export default function Contacto() {
  const [enviado, setEnviado] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <section className="py-5">
      <div className="container">
        <h1 className="mb-4">Contacto</h1>

        <div className="row g-4">
          {/* Formulario */}
          <div className="col-lg-6">
            <form className="needs-validation" onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input className="form-control" required placeholder="Tu nombre completo" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" required placeholder="tu@email.com" />
              </div>
              <div className="mb-3">
                <label className="form-label">Teléfono</label>
                <input className="form-control" placeholder="(opcional)" />
              </div>
              <div className="mb-3">
                <label className="form-label">Mensaje</label>
                <textarea className="form-control" rows={5} required placeholder="Contanos en qué podemos ayudarte"></textarea>
              </div>
              <button className="btn btn-primary" type="submit">Enviar</button>
              {enviado && <div className="alert alert-success mt-3">¡Gracias! Te contactaremos a la brevedad.</div>}
            </form>
          </div>

          {/* Datos + Mapa */}
          <div className="col-lg-6">
            <div className="p-4 bg-light rounded-4 border mb-3">
              <h5>Datos de contacto</h5>
              <ul className="list-unstyled mb-0">
                <li><strong>Dirección:</strong> Av. Siempre Viva 123, CABA</li>
                <li><strong>Teléfono:</strong> +54 11 5555-5555</li>
                <li><strong>Email:</strong> contacto@estudiojuridico.com</li>
                <li className="mt-2"><strong>Horario:</strong> Lunes a Viernes 9:00–18:00</li>
              </ul>
            </div>

            {/* Google Maps embed */}
            <div className="ratio ratio-16x9 rounded-4 overflow-hidden border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.9715988765945!2d-58.38155968477091!3d-34.60373848045985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacae0c4f32f%3A0x8d72962b54e9f8e6!2sAv.%20Siempre%20Viva%20123%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1692123456789!5m2!1ses-419!2sar"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}