import React, { useCallback } from "react";
import ThemeContext from "../../context/ThemeContext";
import { formatExpirationDate } from "../../utils";

export default function CardExpiryInput({
  expiry,
  onChangeExpiry,
  onFocusExpiry,
}) {
  const { theme } = React.useContext(ThemeContext);

  const onChange = useCallback(
    ({ target }) => onChangeExpiry(formatExpirationDate(target.value)),
    [onChangeExpiry]
  );
  const onFocus = useCallback(({ target }) => onFocusExpiry(target.name), [
    onFocusExpiry,
  ]);

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
        onChange={onChange}
        onFocus={onFocus}
      />
    </div>
  );
}
