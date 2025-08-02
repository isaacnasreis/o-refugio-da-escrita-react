import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Carta from "./sections/Carta";
import Inspiracao from "./sections/Inspiracao";
import Desafio from "./sections/Desafio";
import Metas from "./sections/Metas";
import Recursos from "./sections/Recursos";
import Footer from "./components/Footer";
import Caderno from "./sections/Caderno";

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
        <Metas />
        <Recursos />
      </main>
      <Footer />
    </>
  );
}

export default App;
