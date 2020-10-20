import React from "react";
import Switch from "./components/Switch";
import CardForm from "./components/CardForm";
import ThemeContext from "./context/ThemeContext";

function App() {
  const { theme } = React.useContext(ThemeContext);
  return (
      <div className={`App theme-${theme}`}>
        <div className='title'>PAYMENT DETAILS</div>
        <CardForm />
        <Switch />
      </div>
  );
}

export default App;
