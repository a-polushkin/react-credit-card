import React from "react";
import { IoMdMoon as Moon, IoMdSunny as Sun } from "react-icons/io";
import ThemeContext, { Themes } from "../context/ThemeContext";

export default function Switch() {
  const { theme, changeTheme } = React.useContext(ThemeContext);

  return (
    <button className={`switch theme-${theme}`}>
      <Sun
        className={`icon ${theme === Themes.light ? "active" : ""}`}
        onClick={() => changeTheme(Themes.light)}
      />
      <Moon
        className={`icon ${theme === Themes.dark ? "active" : ""}`}
        onClick={() => changeTheme(Themes.dark)}
      />
    </button>
  );
}
