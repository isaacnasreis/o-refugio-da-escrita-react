import React from "react";
import {
  FaBook,
  FaSpellCheck,
  FaRetweet,
  FaUsers,
  FaFeatherAlt,
} from "react-icons/fa";

const recursos = [
  {
    href: "https://www.dicio.com.br/",
    icon: <FaSpellCheck aria-hidden="true" />,
    text: "Dicionário Online",
  },
  {
    href: "https://www.sinonimos.com.br/",
    icon: <FaRetweet aria-hidden="true" />,
    text: "Dicionário de Sinônimos",
  },
  {
    href: "https://www.wattpad.com/",
    icon: <FaUsers aria-hidden="true" />,
    text: "Comunidade de Escritores",
  },
  {
    href: "https://medium.com/",
    icon: <FaFeatherAlt aria-hidden="true" />,
    text: "Plataforma de Publicação",
  },
];

const Recursos = () => {
  return (
    <section id="recursos">
      <div className="container">
        <h2>
          <FaBook aria-hidden="true" /> Recursos Úteis
        </h2>
        <ul>
          {recursos.map((recurso) => (
            <li key={recurso.href}>
              <a href={recurso.href} target="_blank" rel="noopener noreferrer">
                {recurso.icon} {recurso.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Recursos;
