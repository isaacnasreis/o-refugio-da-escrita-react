import React from "react";
import { FaLightbulb } from "react-icons/fa";

const Desafio = ({ promptText, onNewPrompt, onSavePrompt }) => {
  const isDefaultText = promptText === "Sua próxima aventura começa aqui.";

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
        <div
          className="botoes-desafio"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <button id="prompt-button" onClick={onNewPrompt}>
            Gerar Nova Ideia
          </button>
          <button
            id="save-prompt-button"
            onClick={onSavePrompt}
            disabled={isDefaultText}
            aria-label="Salvar ideia atual"
          >
            Salvar Ideia
          </button>
        </div>
      </div>
    </section>
  );
};

export default Desafio;
