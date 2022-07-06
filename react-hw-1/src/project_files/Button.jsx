import React from 'react';
import '../index.css';

const Button = (props) => {
    return (
        <>
            <button className='btn'>{props.text}</button>
        </>
    );
};

export default Button;
