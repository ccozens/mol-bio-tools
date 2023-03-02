import React, { useState } from 'react';
import { checkDnaInput } from '../functions/checkDnaInput';
import { transcribe } from '../functions/transcribe-function';

export const Transcribe = () => {
  const [input, setInput] = useState('ATGCAA');

  const handleTextChange = (event) => {
    // set input to entered text
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
  const rna = transcribe(checkedInput);

  return (
    <div
      className="container px-4 py-6 scroll-mt-20 mx-auto text-2xl bg-orange-200/50 my-5"
      id="Transcribe"
    >
      Transcribe DNA to RNA
      <div className="columns-2">
        <div className="p-2 text-lg">Enter DNA sequence:</div>
        <div className="h-48 p-2 text-base border rounded border-slate-600 bg-amber-200/50 min-h-16">
          <textarea
            id="inputBox"
            className="w-full h-full p-2 bg-transparent  overflow-y-auto scrollbar"
            value={input}
            onChange={handleTextChange}
            onClick={handleClick}
            type="text"
            aria-label="DNA input form for transcribe"
          />
        </div>
        <div className="p-2 text-lg ">RNA:</div>
        <div
          id="outputBox"
          aria-label="RNA output"
          className="h-48 p-2 text-base border rounded border-slate-600 bg-amber-200/50 overflow-y-auto scrollbar"
        >
          {rna}
        </div>
      </div>
    </div>
  );
};
