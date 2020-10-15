import React, { useLayoutEffect, useState } from "react";

const ThemeContext = React.createContext({
  dark: false,
  toggle: () => {},
});

export default ThemeContext;

export function ThemeProvider(props) {
  const [dark, setDark] = useState(false);

  const toggle = () => {
    const html = document.getElementsByTagName("html")[0];
    html.style.cssText = "transition: background-color .5s ease";
    setDark(!dark);
    window.localStorage.setItem("darkTheme", !dark);
  };

  // paints the app before it renders elements
  useLayoutEffect(() => {
    const lastTheme = window.localStorage.getItem("darkTheme");

    if (lastTheme === "true") {
      setDark(true);
      const root = document.getElementsByTagName("html")[0];
      root.setAttribute("theme", "dark");
    }

    if (!lastTheme || lastTheme === "false") {
      setDark(false);
      const root = document.getElementsByTagName("html")[0];
      root.removeAttribute("theme");
    }
  }, [dark]);

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggle,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
