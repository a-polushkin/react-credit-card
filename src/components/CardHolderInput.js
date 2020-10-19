import React from "react";
import ThemeContext from "../context/ThemeContext";

export default function CardHolderInput({ holder, onChangeHolder, onFocus }) {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className="card-input-block">
      <label className="card-input-label" htmlFor="cardHolder">
        Name on card
      </label>
      <input
        id="cardHolder"
        type="text"
        name="cardHolder"
        className={`${theme}-input card-input`}
        placeholder="Name on card"
        required
        maxLength={25}
        value={holder}
        //TODO
        onChange={({ target }) => onChangeHolder(target.value.toUpperCase())}
        onFocus={({ target }) => onFocus(target.name)}
      />
    </div>
  );
}
