import React, { useCallback, useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "../utils";
import CardNumberInput from "./CardNumberInput";
import CardHolderInput from "./CardHolderInput";
import CardExpiryInput from "./CardExpiryInput";
import CardCvcInput from "./CardCvcInput";

export default function CardForm(props) {
  const [number, setNumber] = useState("");
  const [holder, setHolder] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [issuer, setIssuer] = useState("");
  const [focused, setFocus] = useState("");
  const [formData, setFormData] = useState({});

  const onChangeNumber = useCallback((target) => {
    setNumber(formatCreditCardNumber(target.value));
  }, []);
  const onChangeExpiry = useCallback((target) => {
    setExpiry(formatExpirationDate(target.value));
  }, []);
  const onChangeCvc = useCallback((target) => {
    setCvc(formatCVC(target.value));
  }, []);
  const handleCardCallback = useCallback(({ issuer }, isValid) => {
    if (isValid) {
      setIssuer(issuer);
    }
  }, []);
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.valueOf();
        return acc;
      }, {});
    setFormData(formData);
    console.log(formData);
  });

  return (
    <div className="card-container">
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
      <form className="card-form" onSubmit={handleSubmit}>
        <CardNumberInput
          number={number}
          onChangeNumber={onChangeNumber}
          onFocus={setFocus}
        />
        <CardHolderInput
          holder={holder}
          onChangeHolder={setHolder}
          onFocus={setFocus}
        />
        <CardExpiryInput
          expiry={expiry}
          onChangeExpiry={onChangeExpiry}
          onFocus={setFocus}
        />
        <CardCvcInput cvc={cvc} onChangeCvc={onChangeCvc} onFocus={setFocus} />
        <input type="hidden" name="issuer" value={issuer} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
