import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = ({ darkMode, handleThemeChange }) => {
  return (
    <header>
      <div className="container header-content">
        <div className="title-container">
          <h1>O Refúgio da Escrita</h1>
          <p>Um lugar para suas palavras florescerem.</p>
        </div>
        <div className="theme-switcher">
          <FaSun />
          <label className="switch">
            <input
              type="checkbox"
              id="dark-mode-toggle"
              checked={darkMode}
              onChange={handleThemeChange}
            />
            <span className="slider round"></span>
          </label>
          <FaMoon />
        </div>
      </div>
    </header>
  );
};

export default Header;
