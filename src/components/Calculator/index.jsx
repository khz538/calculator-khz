import React, { useState, useEffect } from "react";
import './calculator.css'

const operators = ['+', '-', '/', '*', '**'];
// const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const Calculator = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [hasEvaluated, setHasEvaluated] = useState(false);

    const parseNum = str => str.replace(/\d*(\.\d+)?/g, n => n && +n);
    const parseExpression = str => {
        // check last char is operator--if so, chop off to allow evaluation
        if (operators.includes(str[str.length - 2] + str[str.length - 1])) return parseNum(str.slice(0, -2));
        else if (operators.includes(str[str.length - 1])) return parseNum(str.slice(0, -1));
        return parseNum(str);
    }

    const handleClick = e => {
        const button = e.target.value;
        switch (button) {
            // When pressing equal button, try to evaluate the expression
            case '=': {
                let res;
                let expression = input;
                expression = parseExpression(expression);
                try {
                    res = new Function(`return ${expression}`)().toString();
                    res = Number(parseFloat(res).toPrecision(7)).toString();
                    // res = eval(expression).toString();
                } catch (error) { // If expression invalid, display an error
                    res = 'Invalid Expression';
                }
                // Set display out to the evaluated result or return invalid
                setOutput(res);
                setInput(res);
                setHasEvaluated(true)
                break;
            };
            case '^': {
                let res = input;
                setInput(res += '**');
                setHasEvaluated(false)
                break;
            }
            case 'C': {
                setInput("");
                setOutput("");
                setHasEvaluated(false)
                break;
            }
            case '1':case '2':case '3':case '4':case '5':case '6':case '7':case '8':case '9':case '0':case '(':case ')':case '.': {
                if (hasEvaluated) {
                    setHasEvaluated(false);
                    let res = '';
                    setOutput('');
                    setInput(res += button);
                    break;
                } else {
                    let res = input;
                    setOutput('');
                    setInput(res += button);
                    break;
                }
            }
            case '÷': {
                setOutput('');
                let res = input;
                setInput(res += '/');
                setHasEvaluated(false)
                break;
            }
            case '*':case '+': case '-': {
                let res = input;
                setOutput('');
                setInput(res += button);
                setHasEvaluated(false);
                break;
            }
        }

    }

    // useEffect(() => {
    //     console.log(input, output)
    // })

    const [row1, row2, row3, row4, row5] = [
        ['C', '(', ')', '÷'],
        ['7', '8', '9', '*'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '^', '='],
    ];
    const buttons = {row1, row2, row3, row4, row5};

    for (let row in buttons) {
        buttons[row] = buttons[row].map(label =>
            <button key={label} onClick={handleClick} value={label} id={`id${label}`}>{label}</button>
        )
    }

    return (
        <>
            <div className="grid-container">
                <div className="display">
                    <div className="input">
                        {input}
                    </div>
                    <div className="output">
                        {output}
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
