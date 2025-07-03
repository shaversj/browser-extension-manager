import "../styles/global.css";
import logoLight from "../assets/images/logo.svg";
import logoDark from "../assets/images/logo-dark.png";
import moonIcon from "../assets/images/icon-moon.svg";
import sunIcon from "../assets/images/icon-sun.svg";
import { useState } from "react";

export default function Header() {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(true);

  const toggleDarkMode = () => {
    document.documentElement.setAttribute("data-theme", isDarkModeEnabled ? "" : "dark");
    setIsDarkModeEnabled(!isDarkModeEnabled);
  };

  return (
    <header>
      <div className="bg-neutral-0 flex items-center justify-between rounded-[20px] px-3 py-[12.5px] md:px-4 md:py-[16.5px] dark:bg-neutral-800">
        <img
          className={"h-[41px]"}
          src={isDarkModeEnabled ? logoDark.src : logoLight.src}
          alt="Logo"
        />
        <button
          onClick={() => toggleDarkMode()}
          className="grid size-[50px] cursor-pointer place-items-center rounded-[12px] bg-neutral-100 dark:bg-neutral-700"
        >
          <img src={isDarkModeEnabled ? sunIcon.src : moonIcon.src} alt="Theme Toggle Icon" />
        </button>
      </div>
    </header>
  );
}
