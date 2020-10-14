import React from "react";

export default function CardHolderInput({holder, onChangeHolder, onFocus}){
    return(
        <div className='card-input-block'>
            <label className='card-input-label' htmlFor='cardHolder'>Name on card</label>
            <input
                id='cardHolder'
                type="text"
                name="cardHolder"
                className='card-input'
                placeholder="Name on card"
                required
                maxLength={25}
                value={holder}
                onChange={({target})=>onChangeHolder(target.value.toUpperCase())}
                onFocus={({target})=>onFocus(target.name)}
            />
        </div>
    )
}