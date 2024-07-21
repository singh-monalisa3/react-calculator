import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
    setResult(''); // Clear result when new input is entered
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleEqual = () => {
    try {
      if (input.trim() === '') {
        setResult('Error');
      } else if (input.includes('/0')) {
        setResult('Infinity');
      } else {
        setResult(eval(input).toString());
      }
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Calculator</h1>
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
        <div className="button-container">
          {['7', '8', '9', '+'].map((val) => (
            <button key={val} onClick={() => handleClick(val)}>{val}</button>
          ))}
          {['4', '5', '6', '-'].map((val) => (
            <button key={val} onClick={() => handleClick(val)}>{val}</button>
          ))}
          {['1', '2', '3', '*'].map((val) => (
            <button key={val} onClick={() => handleClick(val)}>{val}</button>
          ))}
          {['C', '0', '=', '/'].map((val) => (
            <button key={val} onClick={() => val === 'C' ? handleClear() : val === '=' ? handleEqual() : handleClick(val)}>{val}</button>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
