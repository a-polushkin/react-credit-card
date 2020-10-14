import React from "react";

export default function CardCvcInput({cvc, onChangeCvc, onFocus}){
    return(
        <div className='card-input-block'>
            <label className='card-input-label' htmlFor='cardDate'>Name on card</label>
            <input
                type="tel"
                name="cvc"
                className="card-input"
                placeholder="CVC"
                pattern="\d{3,4}"
                required
                value={cvc}
                onChange={({target})=>onChangeCvc(target)}
                onFocus={({target})=>onFocus(target.name)}
            />
        </div>
    )
}