import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Carta from "./sections/Carta";
import Inspiracao from "./sections/Inspiracao";
import Desafio from "./sections/Desafio";
import Metas from "./sections/Metas";
import Recursos from "./sections/Recursos";
import Footer from "./components/Footer";

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

  return (
    <>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <main>
        <Carta />
        <Inspiracao />
        <Desafio />
        <Metas />
        <Recursos />
      </main>
      <Footer />
    </>
  );
}

export default App;
