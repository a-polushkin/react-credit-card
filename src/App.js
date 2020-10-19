import React from "react";
import Switch from "./components/Switch";
import CardForm from "./components/CardForm";
import ThemeContext, { ThemeProvider } from "./context/ThemeContext";

function App() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <ThemeProvider>
      <div className={`theme-${theme} App`}>
        <div className='title'>PAYMENT DETAILS</div>
        <CardForm />
        <Switch />
      </div>
    </ThemeProvider>
  );
}

export default App;
