import React from "react";
import ThemeContext from "../context/ThemeContext";

export default function CardExpiryInput({ expiry, onChangeExpiry, onFocus }) {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className="card-input-block">
      <label className="card-input-label" htmlFor="cardDate">
        Name on card
      </label>
      <input
        type="tel"
        name="expiry"
        className={`${theme}-input card-input`}
        placeholder="Valid Thru"
        pattern="\d\d/\d\d"
        required
        value={expiry}
        onChange={({ target }) => onChangeExpiry(target)}
        onFocus={({ target }) => onFocus(target.name)}
      />
    </div>
  );
}
