import { Briefcase, FileText, Users, Scale, Gavel, Shield, Building, HeartHandshake, Laptop, Book } from "lucide-react";
import { Link } from "react-router-dom";

export default function Servicios() {
  const servicios = [
    {
      title: "Asesoría preventiva",
      desc: "Análisis de riesgos legales, auditorías de contratos y compliance.",
      icon: <Shield size={36} />
    },
    {
      title: "Litigios y mediaciones",
      desc: "Representación en procesos judiciales y extrajudiciales.",
      icon: <Gavel size={36} />
    },
    {
      title: "Contratos",
      desc: "Redacción, revisión y negociación de contratos civiles y comerciales.",
      icon: <FileText size={36} />
    },
    {
      title: "Derecho Laboral",
      desc: "Defensa del trabajador y del empleador en conflictos individuales y colectivos.",
      icon: <Briefcase size={36} />
    },
    {
      title: "Familia y Sucesiones",
      desc: "Estrategias respetuosas y efectivas para conflictos sensibles.",
      icon: <Users size={36} />
    },
    {
      title: "Derecho Penal",
      desc: "Patrocinio como abogado penalista en causas delicadas y de alta complejidad.",
      icon: <Scale size={36} />
    },
    {
      title: "Derecho Civil y Comercial",
      desc: "Asesoría integral en conflictos y contratos de índole civil y mercantil.",
      icon: <Book size={36} />
    },
    {
      title: "Defensa del Consumidor",
      desc: "Protección frente a abusos en contratos y servicios.",
      icon: <HeartHandshake size={36} />
    },
    {
      title: "Derecho Informático",
      desc: "Protección de derechos digitales y resolución de conflictos tecnológicos.",
      icon: <Laptop size={36} />
    },
    {
      title: "Derecho Empresarial y Fiscal",
      desc: "Planificación jurídica y tributaria para empresas y startups.",
      icon: <Building size={36} />
    }
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <p className="text-uppercase fw-bold text-primary mb-1">Áreas de Práctica</p>
          <h1 className="fw-bold">Nuestros Servicios</h1>
          <p className="text-muted">Brindamos asesoramiento legal integral para particulares, empresas y organizaciones.</p>
        </div>
        
        <div className="row g-4">
          {servicios.map(s => (
            <div key={s.title} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm card-hover text-center p-4 transition">
                <div className="icon-box mb-3 text-primary">
                  {s.icon}
                </div>
                <h5 className="fw-bold mb-2">{s.title}</h5>
                <p className="text-muted">{s.desc}</p>
                <Link to="/contacto" className="stretched-link text-decoration-none fw-semibold text-primary">
                  Consultar
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hover personalizado */}
      <style>
        {`
          .card-hover {
            transition: all 0.3s ease-in-out;
            border-radius: 12px;
          }
          .card-hover:hover {
            transform: translateY(-6px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            border: 1px solid var(--bs-primary);
          }
          .icon-box {
            transition: transform 0.3s ease;
          }
          .card-hover:hover .icon-box {
            transform: scale(1.15);
          }
        `}
      </style>
    </section>
  );
}
