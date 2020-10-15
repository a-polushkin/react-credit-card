import React from "react";
import "./App.css";
import Switch from "./components/Switch";
import CardForm from "./components/CardForm";

function App() {
  return (
    <div className="App">
      <h2>PAYMENT DETAILS</h2>
      <CardForm />
      <Switch />
    </div>
  );
}

export default App;
