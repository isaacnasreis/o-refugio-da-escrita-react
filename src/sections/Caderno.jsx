import React, { useState } from "react";
import { FaTrash, FaClipboardList, FaPlus } from "react-icons/fa";

const Caderno = ({ savedPrompts, onRemovePrompt, onAddPrompt }) => {
  const [newIdea, setNewIdea] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newIdea.trim() !== "") {
      onAddPrompt(newIdea);
      setNewIdea("");
    }
  };

  return (
    <section id="caderno">
      <div className="container">
        <h2>
          <FaClipboardList aria-hidden="true" /> Seu Caderno de Ideias
        </h2>

        <form onSubmit={handleSubmit} className="form-ideia">
          <input
            type="text"
            value={newIdea}
            onChange={(e) => setNewIdea(e.target.value)}
            placeholder="Digite sua própria ideia aqui..."
            aria-label="Campo para nova ideia"
          />
          <button type="submit" aria-label="Adicionar nova ideia">
            <FaPlus /> Adicionar
          </button>
        </form>

        {savedPrompts.length === 0 ? (
          <p>
            Suas ideias salvas aparecerão aqui. Adicione uma ou salve uma gerada
            acima!
          </p>
        ) : (
          <ul className="lista-ideias-salvas">
            {savedPrompts.map((prompt, index) => (
              <li key={index}>
                <span>{prompt}</span>
                <button
                  onClick={() => onRemovePrompt(prompt)}
                  aria-label={`Remover a ideia: ${prompt}`}
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Caderno;
