import React, { useState } from "react";
import { FaLightbulb } from "react-icons/fa";

const prompts = [
  "Uma biblioteca onde os livros sussurram segredos para quem os lê.",
  "Um detetive que resolve crimes conversando com fantasmas.",
  "A última árvore do mundo começa a falar.",
  "Um chef de cozinha descobre que pode cozinhar emoções em seus pratos.",
  "Dois estranhos trocam de corpo depois de um eclipse solar.",
  "Uma cidade onde é proibido sonhar.",
  "O diário de um gato que acredita ser um deus egípcio.",
  "Um robô começa a sentir saudades de um lugar onde nunca esteve.",
  "Uma flor que floresce apenas uma vez a cada século, e todos querem vê-la.",
  "Alguém recebe uma carta de seu 'eu' do futuro com um aviso.",
];

const Desafio = () => {
  const [promptText, setPromptText] = useState(
    "Sua próxima aventura começa aqui."
  );

  const handleNewPrompt = () => {
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    setPromptText(randomPrompt);
  };

  return (
    <section id="desafio">
      <div className="container">
        <h2>
          <FaLightbulb aria-hidden="true" /> Está sem ideias?
        </h2>
        <p>
          Clique no botão abaixo para gerar um ponto de partida para sua próxima
          história.
        </p>
        <div id="prompt-container">
          <p id="prompt-text">{promptText}</p>
        </div>
        <button id="prompt-button" onClick={handleNewPrompt}>
          Gerar Nova Ideia
        </button>
      </div>
    </section>
  );
};

export default Desafio;
