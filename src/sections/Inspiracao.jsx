import React, { useState, useEffect } from "react";
import { FaQuoteRight } from "react-icons/fa";

const quotes = [
  {
    text: "Comece escrevendo coisas que valem a pena ler. Depois, escreva coisas que valem a pena reescrever.",
    author: "Ernest Hemingway",
  },
  {
    text: "A escrita é uma forma de terapia. Às vezes me pergunto como todas as pessoas que não escrevem, compõem ou pintam conseguem escapar da loucura.",
    author: "Graham Greene",
  },
  {
    text: "Você não pode esperar por inspiração. Você tem que ir atrás dela com um porrete.",
    author: "Jack London",
  },
  { text: "Uma palavra depois da outra é poder.", author: "Margaret Atwood" },
  {
    text: "Escrever é descobrir o que você pensa.",
    author: "Gustave Flaubert",
  },
];

const Inspiracao = () => {
  const [quote, setQuote] = useState({ text: "", author: "" });

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <section id="inspiracao">
      <div className="container">
        <h2>
          <FaQuoteRight aria-hidden="true" /> Inspiração do Dia
        </h2>
        <figure>
          <blockquote>
            <p>"{quote.text}"</p>
          </blockquote>
          <figcaption>— {quote.author}</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Inspiracao;
