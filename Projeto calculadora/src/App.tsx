import React, { useState } from 'react';

function App() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [newNumber, setNewNumber] = useState(true);

  const handleNumber = (num: string) => {
    if (newNumber) {
      setDisplay(num);
      setNewNumber(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOperation = (op: string) => {
    const current = parseFloat(display);
    if (previousValue === null) {
      setPreviousValue(current);
    } else if (operation) {
      const result = calculate(previousValue, current, operation);
      setPreviousValue(result);
      setDisplay(String(result));
    }
    setOperation(op);
    setNewNumber(true);
  };

  const calculate = (a: number, b: number, op: string): number => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '×': return a * b;
      case '÷': return a / b;
      default: return b;
    }
  };

  const handleEqual = () => {
    if (previousValue === null || operation === null) return;
    const current = parseFloat(display);
    const result = calculate(previousValue, current, operation);
    setDisplay(String(result));
    setPreviousValue(null);
    setOperation(null);
    setNewNumber(true);
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setNewNumber(true);
  };

  const handleDecimal = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
      setNewNumber(false);
    }
  };

  const handlePlusMinus = () => {
    setDisplay(String(-parseFloat(display)));
  };

  const handlePercent = () => {
    setDisplay(String(parseFloat(display) / 100));
  };

  const handleSquare = () => {
    const num = parseFloat(display);
    setDisplay(String(num * num));
  };

  const handleReciprocal = () => {
    const num = parseFloat(display);
    if (num !== 0) {
      setDisplay(String(1 / num));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-[#202020] w-80 rounded-lg shadow-xl">
        <div className="p-2 flex justify-between items-center border-b border-gray-700">
          <span className="text-white text-lg">Padrão</span>
          <div className="flex space-x-2">
            <button className="text-white hover:bg-gray-700 p-1 rounded">−</button>
            <button className="text-white hover:bg-gray-700 p-1 rounded">□</button>
            <button className="text-white hover:bg-gray-700 p-1 rounded">×</button>
          </div>
        </div>
        
        <div className="p-4">
          <div className="text-right text-white text-4xl mb-4 h-16 flex items-end justify-end">
            {display}
          </div>
          
          <div className="grid grid-cols-4 gap-1">
            <button onClick={() => handlePercent()} className="bg-[#323232] text-white p-4 rounded hover:bg-gray-600">%</button>
            <button onClick={() => handleClear()} className="bg-[#323232] text-white p-4 rounded hover:bg-gray-600">CE</button>
            <button onClick={() => handleClear()} className="bg-[#323232] text-white p-4 rounded hover:bg-gray-600">C</button>
            <button onClick={() => setDisplay(display.slice(0, -1) || '0')} className="bg-[#323232] text-white p-4 rounded hover:bg-gray-600">⌫</button>

            <button onClick={() => handleReciprocal()} className="bg-[#323232] text-white p-4 rounded hover:bg-gray-600">¹/x</button>
            <button onClick={() => handleSquare()} className="bg-[#323232] text-white p-4 rounded hover:bg-gray-600">x²</button>
            <button onClick={() => handleSquare()} className="bg-[#323232] text-white p-4 rounded hover:bg-gray-600">√x</button>
            <button onClick={() => handleOperation('÷')} className="bg-[#323232] text-white p-4 rounded hover:bg-gray-600">÷</button>

            <button onClick={() => handleNumber('7')} className="bg-[#3B3B3B] text-white p-4 rounded hover:bg-gray-600">7</button>
            <button onClick={() => handleNumber('8')} className="bg-[#3B3B3B] text-white p-4 rounded hover:bg-gray-600">8</button>
            <button onClick={() => handleNumber('9')} className="bg-[#3B3B3B] text-white p-4 rounded hover:bg-gray-600">9</button>
            <button onClick={() => handleOperation('×')} className="bg-[#323232] text-white p-4 rounded hover:bg-gray-600">×</button>

            <button onClick={() => handleNumber('4')} className="bg-[#3B3B3B] text-white p-4 rounded hover:bg-gray-600">4</button>
            <button onClick={() => handleNumber('5')} className="bg-[#3B3B3B] text-white p-4 rounded hover:bg-gray-600">5</button>
            <button onClick={() => handleNumber('6')} className="bg-[#3B3B3B] text-white p-4 rounded hover:bg-gray-600">6</button>
            <button onClick={() => handleOperation('-')} className="bg-[#323232] text-white p-4 rounded hover:bg-gray-600">−</button>

            <button onClick={() => handleNumber('1')} className="bg-[#3B3B3B] text-white p-4 rounded hover:bg-gray-600">1</button>
            <button onClick={() => handleNumber('2')} className="bg-[#3B3B3B] text-white p-4 rounded hover:bg-gray-600">2</button>
            <button onClick={() => handleNumber('3')} className="bg-[#3B3B3B] text-white p-4 rounded hover:bg-gray-600">3</button>
            <button onClick={() => handleOperation('+')} className="bg-[#323232] text-white p-4 rounded hover:bg-gray-600">+</button>

            <button onClick={() => handlePlusMinus()} className="bg-[#3B3B3B] text-white p-4 rounded hover:bg-gray-600">±</button>
            <button onClick={() => handleNumber('0')} className="bg-[#3B3B3B] text-white p-4 rounded hover:bg-gray-600">0</button>
            <button onClick={() => handleDecimal()} className="bg-[#3B3B3B] text-white p-4 rounded hover:bg-gray-600">,</button>
            <button onClick={() => handleEqual()} className="bg-[#4CC2FF] text-white p-4 rounded hover:bg-blue-400">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;