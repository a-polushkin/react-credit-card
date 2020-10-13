import React, {useState} from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import {formatCreditCardNumber} from "../utils";

export default function CardForm (props) {
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');

    return (
        <div className='card-container'>
            <div className='card-preview'>
            <Cards
                cvc={259}
                expiry={'01/21'}
                focused={false}
                name={name}
                number={number}
                preview={true}
                issuer={'visa'}
            />
            </div>
            <form className='card-form'>
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
                    onChange={({target})=>setNumber(formatCreditCardNumber(target.value))}
                    value={number}
                    />
                </div>
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
                    onFocus={({target})=>target.placeholder=''}
                    onBlur={({target})=>{if(name===''){target.placeholder='Name on card'}}}
                    value={name}
                    onChange={({target})=>setName(target.value.toUpperCase())}
                    />
                </div>
            </form>

            <p>{props.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</p>
            <button>Submit</button>
        </div>
    );
}