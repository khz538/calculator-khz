import React, { useState, useContext, useEffect } from "react";
import './calculator.css'

const Calculator = () => {



    const [row1, row2, row3, row4, row5] = [
        ['C', 'AC', '* -1', '/'],
        ['7', '8', '9', '*'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '=']
    ];
    const buttons = {row1, row2, row3, row4, row5};

    for (let row in buttons) {
        buttons[row] = buttons[row].map(label =>
            <button key={label} onClick={() => null} value={label} id={label}>{label}</button>
        )
    }

    return (
        <>
            <div className="input">

            </div>
            <div className="output">

            </div>
            <div className="buttons">
                {buttons.row1}
                {buttons.row2}
                {buttons.row3}
                {buttons.row4}
                {buttons.row5}
            </div>
        </>
    )
}

export default Calculator;
