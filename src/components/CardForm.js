import React, { useCallback, useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import CardNumberInput from "./inputs/CardNumberInput";
import CardHolderInput from "./inputs/CardHolderInput";
import CardExpiryInput from "./inputs/CardExpiryInput";
import CardCvcInput from "./inputs/CardCvcInput";
import ThemeContext from "../context/ThemeContext";

export default function CardForm(props) {
  const [number, setNumber] = useState("");
  const [holder, setHolder] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [issuer, setIssuer] = useState("");
  const [focused, setFocus] = useState("");

  const { theme } = React.useContext(ThemeContext);

  const handleCardCallback = useCallback(({ issuer }, isValid) => {
    if (isValid) {
      setIssuer(issuer);
    }
  }, []);
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    for (let [name, value] of formData) {
      console.log(`${name} = ${value}`);
    }
  }, []);

  return (
    <div className={`card-container theme-${theme}`}>
      <div className="card-preview">
        <Cards
          cvc={cvc}
          expiry={expiry}
          focused={focused}
          name={holder}
          number={number}
          callback={handleCardCallback}
        />
      </div>
      <form className={`card-form theme-${theme}`} name="card-form" onSubmit={handleSubmit}>
        <CardNumberInput
          number={number}
          onChangeNumber={setNumber}
          onFocusNumber={setFocus}
        />
        <CardHolderInput
          holder={holder}
          onChangeHolder={setHolder}
          onFocusHolder={setFocus}
        />
        <CardExpiryInput
          expiry={expiry}
          onChangeExpiry={setExpiry}
          onFocusExpiry={setFocus}
        />
        <CardCvcInput cvc={cvc} onChangeCvc={setCvc} onFocusCvc={setFocus} />
        <input type="hidden" name="issuer" value={issuer} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
