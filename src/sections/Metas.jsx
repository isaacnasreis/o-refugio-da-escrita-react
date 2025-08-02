import React, { useState, useEffect } from "react";
import { FaFlagCheckered } from "react-icons/fa";

const Metas = () => {
  const [inputValue, setInputValue] = useState("");
  const [dailyGoal, setDailyGoal] = useState(0);

  useEffect(() => {
    const savedGoal = localStorage.getItem("dailyGoal");
    if (savedGoal) {
      const goal = parseInt(savedGoal, 10);
      setDailyGoal(goal);
      setInputValue(goal);
    }
  }, []);

  const handleSetGoal = () => {
    const newGoal = parseInt(inputValue, 10);
    if (!isNaN(newGoal) && newGoal > 0) {
      setDailyGoal(newGoal);
      localStorage.setItem("dailyGoal", newGoal);
    } else {
      setDailyGoal(0);
      setInputValue("");
      localStorage.removeItem("dailyGoal");
    }
  };

  return (
    <section id="metas">
      <div className="container">
        <h2>
          <FaFlagCheckered aria-hidden="true" /> Sua Meta de Escrita Diária
        </h2>
        <p>Defina uma meta de palavras para hoje e acompanhe seu progresso!</p>
        <div className="goal-tracker">
          <input
            type="number"
            id="goal-input"
            placeholder="Ex: 500 palavras"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            aria-label="Definir meta de palavras"
          />
          <button id="goal-button" onClick={handleSetGoal}>
            Definir Meta
          </button>
        </div>
        <div id="goal-progress">
          {dailyGoal > 0 &&
            `Sua meta de hoje: ${dailyGoal} palavras. Você consegue!`}
        </div>
      </div>
    </section>
  );
};

export default Metas;
