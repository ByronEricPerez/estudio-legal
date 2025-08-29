export default function ConsultaOnline() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h1 className="mb-3" style={{ color: "var(--azul-marino)", fontFamily: "'Playfair Display', serif" }}>
              Consulta Online
            </h1>
            <p className="lead" style={{ color: "var(--gris-oscuro)", fontFamily: "'Lato', sans-serif" }}>
              Ahora podés recibir asesoramiento jurídico desde la comodidad de tu hogar.  
              Una vez confirmado tu pago, recibirás un enlace para una videollamada con uno de nuestros abogados.
            </p>
          </div>
        </div>

        <div className="row g-4 align-items-center">
          {/* Info */}
          <div className="col-lg-6">
            <div className="p-4 bg-white shadow-sm rounded-4 border">
              <h4 className="mb-3" style={{ color: "var(--azul-marino)", fontFamily: "'Playfair Display', serif" }}>
                ¿Cómo funciona?
              </h4>
              <ol className="text-start" style={{ color: "var(--gris-oscuro)", fontFamily: "'Lato', sans-serif" }}>
                <li>Elegí el día y horario que más te convenga.</li>
                <li>Realizá el pago seguro a través de nuestra plataforma.</li>
                <li>
                  Una vez confirmado, <strong>recibirás la invitación a la videollamada</strong> en tu correo electrónico
                  y también un mensaje en tu <strong>WhatsApp</strong>.
                </li>
                <li>En el horario acordado, ingresá al enlace y tendrás tu consulta personalizada.</li>
              </ol>
              <p className="mt-3" style={{ fontStyle: "italic", color: "var(--gris-oscuro)" }}>
                La consulta tiene una duración de <strong>45 minutos</strong>, con posibilidad de extenderse si es necesario.
              </p>
              <button
                className="btn btn-lg fw-semibold mt-3"
                style={{
                  backgroundColor: "var(--dorado)",
                  color: "var(--azul-marino)",
                  border: "none",
                }}
              >
                Reservar Consulta
              </button>
            </div>
          </div>

          {/* Imagen ilustrativa */}
          <div className="col-lg-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png"
              alt="Videollamada legal"
              className="img-fluid"
              style={{ maxHeight: "300px" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

