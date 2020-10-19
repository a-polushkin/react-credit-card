import React, { useCallback } from "react";
import ThemeContext from "../../context/ThemeContext";
import { formatCreditCardNumber } from "../../utils";

export default function CardNumberInput({
  number,
  onChangeNumber,
  onFocusNumber,
}) {
  const { theme } = React.useContext(ThemeContext);
  const onChange = useCallback(
    ({target}) => {
      onChangeNumber(formatCreditCardNumber(target.value));
    },
    [onChangeNumber]
  );
  const onFocus = useCallback(({ target }) => onFocusNumber(target.name), [
    onFocusNumber,
  ]);

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
        onChange={onChange}
        onFocus={onFocus}
      />
    </div>
  );
}
