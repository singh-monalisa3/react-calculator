import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const handleClick = (value) => {
        setError('');
        if (value === '=') {
            if (input === '') {
                setError('Error');
                setResult('');
                return;
            }
            try {
                // Evaluate the expression
                const evalResult = eval(input);
                if (isNaN(evalResult)) {
                    setError('NaN');
                    setResult('');
                } else if (!isFinite(evalResult)) {
                    setError('Infinity');
                    setResult('');
                } else {
                    setResult(evalResult);
                }
            } catch (err) {
                setError('Error');
                setResult('');
            }
        } else if (value === 'C') {
            setInput('');
            setResult('');
            setError('');
        } else {
            setInput(input + value);
        }
    };

    return (
        <div className="calculator">
            <h1>React Calculator</h1>
            <input type="text" value={input} readOnly />
            <div className="result">{result}</div>
            <div className="error">{error}</div>
            <div className="buttons">
                {['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', 'C', '0', '=', '/'].map((button) => (
                    <button key={button} onClick={() => handleClick(button)}>{button}</button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
