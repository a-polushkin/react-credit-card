import React, { useCallback } from "react";
import ThemeContext from "../../context/ThemeContext";
import PropTypes from "prop-types";

export default function CardHolderInput({
  holder,
  onChangeHolder,
  onFocusHolder,
}) {
  const { theme } = React.useContext(ThemeContext);
  const onChange = useCallback(
    ({ target }) => onChangeHolder(target.value.toUpperCase()),
    [onChangeHolder]
  );
  const onFocus = useCallback(({ target }) => onFocusHolder(target.name), [
    onFocusHolder,
  ]);

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
        onChange={onChange}
        onFocus={onFocus}
      />
    </div>
  );
}

CardHolderInput.propTypes = {
    holder: PropTypes.string,
    onChangeHolder: PropTypes.func,
    onFocus: PropTypes.func,
};