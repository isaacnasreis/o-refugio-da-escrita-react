import React, { useState, useEffect, useCallback } from "react";

import Header from "./components/Header";
import Carta from "./sections/Carta";
import Inspiracao from "./sections/Inspiracao";
import Desafio from "./sections/Desafio";
import Metas from "./sections/Metas";
import Recursos from "./sections/Recursos";
import Footer from "./components/Footer";
import Caderno from "./sections/Caderno";
import EspacoEscrita from "./sections/EspacoEscrita";

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

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleThemeChange = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const [promptText, setPromptText] = useState(
    "Sua próxima aventura começa aqui."
  );

  const [savedPrompts, setSavedPrompts] = useState(() => {
    const saved = localStorage.getItem("savedPrompts");
    return saved ? JSON.parse(saved) : [];
  });

  const handleNewPrompt = () => {
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    setPromptText(randomPrompt);
  };

  const addPrompt = (promptToAdd) => {
    if (
      promptToAdd &&
      promptToAdd.trim() !== "" &&
      !savedPrompts.includes(promptToAdd)
    ) {
      const newSavedPrompts = [...savedPrompts, promptToAdd];
      setSavedPrompts(newSavedPrompts);
    }
  };

  const removeSavedPrompt = (promptToRemove) => {
    const newSavedPrompts = savedPrompts.filter(
      (prompt) => prompt !== promptToRemove
    );
    setSavedPrompts(newSavedPrompts);
  };

  useEffect(() => {
    localStorage.setItem("savedPrompts", JSON.stringify(savedPrompts));
  }, [savedPrompts]);

  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem("writingEntries");
    return saved ? JSON.parse(saved) : [];
  });
  const [wordCount, setWordCount] = useState(0);
  const [activeEntryId, setActiveEntryId] = useState(null);

  useEffect(() => {
    localStorage.setItem("writingEntries", JSON.stringify(entries));
  }, [entries]);

  const addEntry = () => {
    const newEntry = {
      id: Date.now(),
      title: "Nova Anotação",
      content: "",
      createdAt: new Date().toISOString(),
    };
    setEntries([newEntry, ...entries]);
    setActiveEntryId(newEntry.id);
  };

  const updateEntry = (updatedEntry) => {
    const updatedEntries = entries.map((entry) => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      }
      return entry;
    });
    setEntries(updatedEntries);
  };

  const deleteEntry = (idToDelete) => {
    const newEntries = entries.filter((entry) => entry.id !== idToDelete);
    setEntries(newEntries);

    if (activeEntryId === idToDelete) {
      setActiveEntryId(null);
    }
  };

  const getActiveEntry = useCallback(() => {
    return entries.find((entry) => entry.id === activeEntryId);
  }, [entries, activeEntryId]);

  useEffect(() => {
    const activeEntry = getActiveEntry();
    if (activeEntry && activeEntry.content) {
      const words = activeEntry.content.trim().split(/\s+/).filter(Boolean);
      setWordCount(words.length);
    } else {
      setWordCount(0);
    }
  }, [getActiveEntry]);

  return (
    <>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <main>
        <Carta />
        <Inspiracao />
        <Desafio
          promptText={promptText}
          onNewPrompt={handleNewPrompt}
          onSavePrompt={() => addPrompt(promptText)}
        />
        <Caderno
          savedPrompts={savedPrompts}
          onRemovePrompt={removeSavedPrompt}
          onAddPrompt={addPrompt}
        />
        <EspacoEscrita
          entries={entries}
          addEntry={addEntry}
          activeEntry={getActiveEntry()}
          setActiveEntryId={setActiveEntryId}
          updateEntry={updateEntry}
          deleteEntry={deleteEntry}
        />
        <Metas currentWordCount={wordCount} />
        <Recursos />
      </main>
      <Footer />
    </>
  );
}

export default App;
