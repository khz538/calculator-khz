import React, { useState, useContext } from "react";

const Button = ({ label, handleClick }) => {

    return (
        <button onClick={handleClick} value={label} id={label}>{label}</button>
    )
}

export default Button;
