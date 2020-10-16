import React from "react";
import ThemeContext from "../context/ThemeContext";

export default function CardNumberInput({ number, onChangeNumber, onFocus }) {
    const { theme } = React.useContext(ThemeContext);

    return (
      <div className="card-input-block">
        <label className="card-input-label" htmlFor="cardNumber">
          Card Number
        </label>
        <input
          id="cardNumber"
          type="tel"
          name="cardNumber"
          className={`${theme}-input card-input`}
          inputMode="numeric"
          autoComplete="cc-number"
          placeholder="**** **** **** ****"
          required
          maxLength={19}
          value={number}
          onChange={({ target }) => onChangeNumber(target)}
          onFocus={({ target }) => onFocus(target.name)}
        />
      </div>
    );
}
