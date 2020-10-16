import React from "react";
import ThemeContext from "../context/ThemeContext";

export default function CardCvcInput({ cvc, onChangeCvc, onFocus }) {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className="card-input-block">
      <label className="card-input-label" htmlFor="cardDate">
        Name on card
      </label>
      <input
        type="tel"
        name="cvc"
        className={`${theme}-input card-input`}
        placeholder="CVC"
        pattern="\d{3,4}"
        required
        value={cvc}
        onChange={({ target }) => onChangeCvc(target)}
        onFocus={({ target }) => onFocus(target.name)}
      />
    </div>
  );
}
