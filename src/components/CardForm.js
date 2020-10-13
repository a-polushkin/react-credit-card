import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export default function CardForm (props) {

    return (
        <div className='card-form'>
            <div className='card-preview'>
            <Cards
                cvc={259}
                expiry={'01/21'}
                focused={false}
                name={'Bruce Wayne'}
                number={1234123412341234}
                preview={true}
                issuer={'mastercard'}
            />
            </div>
            <p>{props.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</p>
            <button>Submit</button>
        </div>
    );
}