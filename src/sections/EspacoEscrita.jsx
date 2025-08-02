import React from "react";
import { FaPlus, FaBookOpen } from "react-icons/fa";

const EspacoEscrita = ({
  entries,
  addEntry,
  activeEntry,
  setActiveEntryId,
  updateEntry,
}) => {
  const onContentChange = (content) => {
    updateEntry({
      ...activeEntry,
      content: content,
    });
  };

  return (
    <section id="espaco-escrita">
      <div className="container-escrita">
        <div className="sidebar-escrita">
          <button className="botao-nova-anotacao" onClick={addEntry}>
            <FaPlus /> Nova Anotação
          </button>
          <div className="lista-anotacoes">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className={`item-anotacao ${
                  entry.id === activeEntry?.id ? "active" : ""
                }`}
                onClick={() => setActiveEntryId(entry.id)}
              >
                <strong className="item-titulo">
                  {entry.title || "Nova Anotação"}
                </strong>
                <span className="item-preview">
                  {entry.content?.substring(0, 30) + "..." || "Nenhum conteúdo"}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="editor-principal">
          {activeEntry ? (
            <>
              <textarea
                value={activeEntry.content}
                onChange={(e) => onContentChange(e.target.value)}
                placeholder="Suas palavras têm poder. Comece a escrever aqui..."
                aria-label="Editor de texto principal"
              ></textarea>
            </>
          ) : (
            <div className="sem-anotacao-selecionada">
              <FaBookOpen size={50} />
              <p>Selecione uma anotação para editar ou crie uma nova.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EspacoEscrita;
