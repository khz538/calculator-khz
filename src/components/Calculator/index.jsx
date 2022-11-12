import React, { useEffect, useState } from "react";
import Button from '../Button';

const Calculator = () => {
    const [runningTotal, setRunningTotal] = useState('');
    const [operator, setOperator] = useState('');
    const [currentNumInput, setCurrentNumInput] = useState(0);
    const [displayVal, setDisplayVal] = useState('test');
    const [hasPressedOperator, setHasPressedOperator] = useState(false);
    const numbers = [1,2,3,4,5,6,7,8,9,0];
    const operators = ['+', '-', '*', '/'];
    const buttonValues = ['AC', 'C', ...numbers, ...operators, '.', '=']
    const [row1, row2, row3, row4, row5] = [
        ['C', 'AC', '* -1', '/'],
        ['7', '8', '9', '*'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '=']
    ]
    const buttons = {row1, row2, row3, row4, row5}

    buttons.row1 = buttons.row1.map(label => {
        return (
            <Button key={label} label={label} />
        )
    });
    buttons.row2 = buttons.row2.map(label => {
        return (
            <Button key={label} label={label} />
        )
    });
    buttons.row3 = buttons.row3.map(label => {
        return (
            <Button key={label} label={label} />
        )
    });
    buttons.row4 = buttons.row4.map(label => {
        return (
            <Button key={label} label={label} />
        )
    });
    buttons.row5 = buttons.row5.map(label => {
        return (
            <Button key={label} label={label} />
        )
    });

    return (
        <>
            <div className="calculator-wrapper">
                <div>
                    {displayVal}
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
