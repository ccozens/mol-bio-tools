import React, { useState } from 'react';
import { checkDnaInput } from '../scripts/checkDnaInput';
import { reverseComplementDNA } from '../scripts/reverse-complement-script';
export const ReverseComplementDNA = () => {
  const [input, setInput] = useState('ATGCAA');

  const handleTextChange = (event) => {
    setInput(event.target.value);
  };

  const [count, setCount] = useState(0);
  const handleClick = (event) => {
    if (count === 0) {
      setInput('');
      setCount(count + 1);
    }
  };

  const checkedInput = checkDnaInput(input);
  const revComp = reverseComplementDNA(checkedInput);

  return (
    <div
      className="container gap-4 px-4 py-6 scroll-mt-20 mx-auto text-2xl bg-orange-200/50 my-5"
      id="Reverse complement"
    >
      Reverse complement DNA
      <div className="columns-2">
        <div className="p-2 text-lg">Enter DNA sequence:</div>
        <div className="h-48 p-2 text-base border rounded border-slate-600 bg-amber-200/50 min-h-16">
          <textarea
            id="inputBox"
            className="w-full h-full p-2 bg-transparent overflow-y-auto scrollbar"
            value={input}
            onChange={handleTextChange}
            onClick={handleClick}
            type="text"
            aria-label="DNA input form for reverse complement"
          />
        </div>
        <div className="p-2 text-lg">Reverse complement:</div>
        <div
          id="outputBox"
          aria-label="reverse complement output"
          className="h-48 p-2 text-base border rounded border-slate-600 bg-amber-200/50 overflow-y-auto scrollbar"
        >
          {revComp}
        </div>
      </div>
    </div>
  );
};
