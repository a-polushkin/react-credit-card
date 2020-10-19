import React, { useLayoutEffect, useState } from "react";

export const Themes = { light: "light", dark: "dark" };

const ThemeContext = React.createContext({
  theme: Themes.light,
  changeTheme: () => {},
});

export default ThemeContext;

export function ThemeProvider(props) {
  const [theme, setTheme] = useState(Themes.light);

  const changeTheme = (theme) => {
    setTheme(theme);
    window.localStorage.setItem("theme", theme);
  };

  // paints the app before it renders elements
  useLayoutEffect(() => {
    const lastTheme = window.localStorage.getItem("theme");
    if (lastTheme) {
      setTheme(lastTheme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
