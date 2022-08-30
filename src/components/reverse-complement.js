import React, { useState } from 'react';
import { checkInput } from '../scripts/checkDnaInput-script';
import { reverseComplementDNA } from '../scripts/reverse-complement-script';
export const ReverseComplementDNA = () => {
  const [input, setInput] = useState('ATGCAA');

  const handleTextChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    setInput("");
  }

  const checkedInput = checkInput(input);

  const revComp = reverseComplementDNA(checkedInput);

  return (
    <div className="container gap-4 px-4 py-8 mx-auto text-2xl" id="Reverse complement">
      Reverse complement DNA
      <div className="columns-2">
        <div className="p-2 text-lg">Enter DNA Here:</div>
        <div className="h-48 p-2 text-base border rounded border-slate-600 bg-mimosa-std min-h-16">
        <textarea id="inputBox"
          className="w-full h-full p-2 bg-mimosa-std"
          value={input}
          onChange={handleTextChange}
          onClick={handleClick}
          type="text"
          aria-label="DNA input form for reverse complement"
        />
        </div>
        <div className="p-2 text-lg ">Reverse complement will show here:</div>
        <div id="outputBox" className="h-48 p-2 text-base border rounded border-slate-600 bg-mimosa-std">{revComp}</div>
      </div>
    </div>
  );
};

