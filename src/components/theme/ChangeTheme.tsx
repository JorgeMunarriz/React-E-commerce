import React, { useState } from "react";
import "./ChangeTheme.css"

/**
 * The functionality for switching between light dark and auto themes
 */

interface ThemeButtonProps {
  theme: string;
  selectedTheme: string;
  onClick: () => void;
  children: React.ReactNode;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ theme, selectedTheme, onClick, children }) => {
  const isActive = theme === selectedTheme;

  return (
    <button type="button" className={`dropdown-item d-flex align-items-center btn-theme  ${isActive ? "bg-danger" : ""}`} data-bs-theme-value={theme} aria-pressed={isActive} onClick={onClick}>
      {children}
      {isActive && (
        <svg className="bi ms-auto" width="1em" height="1em">
          <use href="#check2"></use>
        </svg>
      )}
    </button>
  );
};

export const ChangeTheme: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<string>("auto");

  const changeTheme = (theme: string) => {
    setSelectedTheme(theme);
    const html = document.getElementById("html") as HTMLElement;
    html?.setAttribute("data-bs-theme", theme);
  };

  const handleThemeButtonClick = (theme: string) => {
    changeTheme(theme);
  };

  const currentHour = new Date().getHours();
  const isDayTime = currentHour >= 8 && currentHour < 18;
  const defaultTheme = isDayTime ? "light" : "dark";

  return (
    <>
      

      <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
        <svg xmlns="http://www.w3.org/2000/svg" className="svg-theme">
        <symbol id="check2" viewBox="0 0 16 16">
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
        </symbol>
        
        
      </svg>
        <button className="btn btn-danger py-2 dropdown-toggle d-flex align-items-center" id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" aria-label="Toggle theme (auto)">
        <i className="bi bi-circle-half icons"></i>
        </button>
        <ul className="dropdown-menu" aria-labelledby="bd-theme">
          <ThemeButton theme="light" selectedTheme={selectedTheme} onClick={() => handleThemeButtonClick("light")} >
          <i className="bi bi-sun-fill icons"></i>{"    "}
            Light
          </ThemeButton>
          <ThemeButton theme="dark" selectedTheme={selectedTheme} onClick={() => handleThemeButtonClick("dark")}>
          <i className="bi bi-moon-fill icons"></i>{"     "}
            Dark
          </ThemeButton>
          <ThemeButton theme="auto" selectedTheme={selectedTheme} onClick={() => handleThemeButtonClick(defaultTheme)}>
          <i className="bi bi-circle-half icons"></i>{"    "}
            Auto
          </ThemeButton>
        </ul>
      </div>
    </>
  );
};
