import React, { useState, useContext } from "react";
import Button from '../Button';

const Calculator = () => {
    // const [displayVal, setDisplayVal] = useState('0');
    // const [hasPressedOperator, setHasPressedOperator] = useState(false);
    // const [operator, setOperator] = useState('');
    // const [result, setResult] = useState('');
    // const [prevOperand, setPrevOperand] = useState('');
    // const [nextOperand, setNextOperand] = useState('');
    // const [isDecimal, setIsDecimal] = useState(false);

    // const handleClick = e => {
    //     e.preventDefault();
    //     const button = e.target.value;
    //     // handle clear functions
    //     switch (button) {
    //         case 'C': {
    //             setDisplayVal('0');
    //             if (hasPressedOperator && !nextOperand) setHasPressedOperator(false);
    //             else if (hasPressedOperator && nextOperand) setNextOperand('');
    //             else if (prevOperand && !hasPressedOperator) setPrevOperand('');

    //         };
    //         case 'AC': {
    //             setDisplayVal('0');
    //             setOperator('');
    //             setNextOperand('');
    //             setPrevOperand('');
    //             setResult('');
    //         };
    //         case '* -1': {

    //         }
    //         case '=': {
    //             nextOperand ? setResult(eval(`${prevOperand}${operator}${nextOperand}`)) : setResult(prevOperand);
    //             setDisplayVal(result)
    //         }
    //         case '.': {
    //             if (!isDecimal) {
    //                 if (!hasPressedOperator) {
    //                     setPrevOperand(prevOperand + button)
    //                 } else {
    //                     setNextOperand(nextOperand + button)
    //                 }
    //             }
    //         }
    //         default: {
    //             if (hasPressedOperator) {
    //                 setNextOperand(nextOperand + button)
    //                 setDisplayVal(nextOperand)
    //             } else {
    //                 setPrevOperand(prevOperand + button)
    //                 setDisplayVal(prevOperand)
    //             }
    //         }
    //     }
    // }

    const [row1, row2, row3, row4, row5] = [
        ['C', 'AC', '* -1', '/'],
        ['7', '8', '9', '*'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '=']
    ];
    const buttons = {row1, row2, row3, row4, row5};

    buttons.row1 = buttons.row1.map(label => {
        return (
            <Button key={label} label={label} handleClick={handleClick} />
        )
    });
    buttons.row2 = buttons.row2.map(label => {
        return (
            <Button key={label} label={label} handleClick={handleClick} />
        )
    });
    buttons.row3 = buttons.row3.map(label => {
        return (
            <Button key={label} label={label} handleClick={handleClick} />
        )
    });
    buttons.row4 = buttons.row4.map(label => {
        return (
            <Button key={label} label={label} handleClick={handleClick} />
        )
    });
    buttons.row5 = buttons.row5.map(label => {
        return (
            <Button key={label} label={label} handleClick={handleClick} />
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
                </div>
                <div className="buttons" id="bottom-row">
                    {buttons.row5}
                </div>
            </div>
        </>
    )
}

export default Calculator;
