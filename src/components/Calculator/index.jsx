import React, { useState, useContext, useEffect } from "react";
import './calculator.css'

const Calculator = () => {

    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');


    const [row1, row2, row3, row4, row5] = [
        ['C', '(', ')', '/'],
        ['7', '8', '9', '*'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '=']
    ];
    const buttons = {row1, row2, row3, row4, row5};

    for (let row in buttons) {
        buttons[row] = buttons[row].map(label =>
            <button key={label} onClick={() => null} value={label} id={`id${label}`}>{label}</button>
        )
    }

    return (
        <>
            <div className="grid-container">
                <div className="display">
                    <div className="prev">

                    </div>
                    <div className="curr">

                    </div>
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
            </div>
        </>
    )
}

export default Calculator;
