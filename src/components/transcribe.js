import React, { useState } from 'react';
import { checkInput } from '../scripts/checkDnaInput-script';
import { transcribe } from '../scripts/transcribe-script';

export const Transcribe = () => {
  const [input, setInput] = useState('ATGCAA');

  const handleTextChange = (event) => {
    // set input to entered text
    setInput(event.target.value);
  };

  
  const handleClick = () => {
    if (input === 'ATGCAA') {
      setInput('');
    }
  };

  const checkedInput = checkInput(input);
  const rna = transcribe(checkedInput);  


  return (
    <div
      className="container gap-4 px-4 py-8 mx-auto text-2xl bg-orange-300 mb-3 mt-5"
      id="Transcribe"
    >
      Transcribe DNA to RNA
      <div className="columns-2">
        <div className="p-2 text-lg">Enter DNA Here:</div>
        <div className="h-48 p-2 text-base border rounded border-slate-600 bg-mimosa-std min-h-16 ">
          <textarea
            id="inputBox"
            className="w-full h-full p-2 bg-mimosa-std"
            value={input}
            onChange={handleTextChange}
            onClick={handleClick}
            type="text"
            aria-label="DNA input form for transcribe"
          />
        </div>
        <div className="p-2 text-lg ">RNA will show here:</div>
        <div
          id="outputBox"
          aria-label="RNA output"
          className="h-48 p-2 text-base border rounded border-slate-600 bg-mimosa-std"
        >
          {rna}
        </div>
      </div>
    </div>
  );
};
