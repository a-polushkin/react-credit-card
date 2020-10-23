import React, {useCallback} from "react";
import PropTypes from "prop-types";
import ThemeContext from "../../context/ThemeContext";
import {formatCVC} from "../../utils";


export default function CardCvcInput({ cvc, onChangeCvc, onFocusCvc }) {
  const { theme } = React.useContext(ThemeContext);

  const onChange = useCallback(
    ({target}) => {
      onChangeCvc(formatCVC(target.value));
    },
    [onChangeCvc]
  );
  const onFocus = useCallback(({ target }) => onFocusCvc(target.name), [
    onFocusCvc,
  ]);

  return (
    <div className="card-input-block">
      <label className="card-input-label" htmlFor="cardDate">
          Card Verification Code
      </label>
      <input
        type="tel"
        name="cvc"
        className={`${theme}-input card-input`}
        placeholder="CVC"
        pattern="\d{3,4}"
        required
        value={cvc}
        onChange={onChange}
        onFocus={onFocus}
      />
    </div>
  );
}

CardCvcInput.propTypes = {
  cvc: PropTypes.string,
  onChangeCvc: PropTypes.func,
  onFocus: PropTypes.func,
};