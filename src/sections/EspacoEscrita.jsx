import React from "react";
import { FaPlus, FaBookOpen, FaTrash, FaDownload } from "react-icons/fa";

const EspacoEscrita = ({
  entries,
  addEntry,
  activeEntry,
  setActiveEntryId,
  updateEntry,
  deleteEntry,
}) => {
  const onContentChange = (content) => {
    updateEntry({
      ...activeEntry,
      content: content,
    });
  };

  const handleDelete = (e, entryId) => {
    e.stopPropagation();
    deleteEntry(entryId);
  };

  const onEntryChange = (field, value) => {
    updateEntry({
      ...activeEntry,
      [field]: value,
    });
  };

  const handleExport = () => {
    if (!activeEntry) return;

    const blob = new Blob([activeEntry.content], {
      type: "text/plain;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    const fileName = `${activeEntry.title
      .replace(/[^a-z0-9]/gi, "_")
      .toLowerCase()}.txt`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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
                <div className="item-header">
                  <strong className="item-titulo">
                    {entry.title || "Nova Anotação"}
                  </strong>
                  <button
                    className="botao-deletar"
                    onClick={(e) => handleDelete(e, entry.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
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
              <div className="editor-header">
                <input
                  type="text"
                  className="editor-titulo"
                  value={activeEntry.title}
                  onChange={(e) => onEntryChange("title", e.target.value)}
                  placeholder="Dê um título à sua anotação"
                />
                <button
                  className="botao-exportar"
                  onClick={handleExport}
                  aria-label="Exportar anotação"
                >
                  <FaDownload /> Exportar
                </button>
              </div>
              <textarea
                value={activeEntry.content}
                onChange={(e) => onEntryChange("content", e.target.value)}
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
