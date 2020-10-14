import React from "react";

export default function CardNumberInput({number, onChangeNumber, onFocus}){
    return(
        <div className='card-input-block'>
            <label className='card-input-label' htmlFor='cardNumber'>Card Number</label>
            <input
                id='cardNumber'
                type='tel'
                name="cardNumber"
                className='card-input'
                inputMode="numeric"
                autoComplete="cc-number"
                placeholder="**** **** **** ****"
                required
                maxLength={19}
                value={number}
                onChange={({target})=>onChangeNumber(target)}
                onFocus={({target})=>onFocus(target.name)}
            />
        </div>
    )
}