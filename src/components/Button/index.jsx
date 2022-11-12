import React, { useState } from "react";

const Button = ({ label }) => {

    const handleClick = async e => {
        e.preventDefault();
        console.log('clicked')
    }
    
    return (
        <button onClick={handleClick} value={label} id={label}>{label}</button>
    )
}

export default Button;
