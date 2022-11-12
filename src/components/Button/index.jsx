import React, { useState } from "react";

const Button = ({ label }) => {
    const [] = useState('');

    const handleClick = async e => {
        e.preventDefault();
        console.log(label);
        console.log(typeof label)
    }

    return (
        <button onClick={handleClick} value={label} id={label}>{label}</button>
    )
}

export default Button;
