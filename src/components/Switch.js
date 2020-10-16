import React from "react";
import { IoMdMoon as Moon, IoMdSunny as Sun } from "react-icons/io";
import ThemeContext, {Themes} from "../context/ThemeContext";

export default function Switch() {
  const { theme, changeTheme } = React.useContext(ThemeContext);

  return (
    <button className="switch">
      <div onClick={() => changeTheme(Themes.light)}>
        <Sun className={`icon ${theme === Themes.light ? "active" : ""}`} />
      </div>
      <div onClick={() => changeTheme(Themes.dark)}>
        <Moon className={`icon ${theme === Themes.dark ? "active" : ""}`} />
      </div>
    </button>
  );
}
