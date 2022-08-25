import React, { useState } from 'react';
import { checkInput } from '../scripts/checkDnaInput-script';
import { transcribe } from '../scripts/transcribe-script';
export const Transcribe = () => {
  const [input, setInput] = useState('ATGCAA');

  const handleTextChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    setInput('');
  };

  const checkedInput = checkInput(input);

  const rna = transcribe(checkedInput);

  return (
    <div className="container gap-4 p-4 mx-auto text-2xl">
      Translate DNA to RNA
      <div className="columns-2">
        <div className="p-2 text-lg">Enter DNA Here:</div>
        <div className="h-48 p-2 text-base border rounded border-slate-600 bg-slate-800 min-h-16">
          <textarea
            id="inputBox"
            className="w-full h-full p-2 bg-slate-800"
            value={input}
            onChange={handleTextChange}
            onClick={handleClick}
            type="text"
            aria-label="DNA input form"
          />
        </div>
        <div className="p-2 text-lg ">RNA will show here:</div>
        <div
          id="outputBox"
          className="h-48 p-2 text-base border rounded border-slate-600 bg-slate-800"
        >
          {rna}
        </div>
      </div>
    </div>
  );
};

/* <div className="container gap-4 p-4 mx-auto bg-white border border-green-500">
        Translate DNA to RNA
    <div className=" columns-2">
      <div className="p-2 border border-yellow-500">1</div>
      <div className="h-48 p-2 border border-orange-500 ">2</div>
      <div className="p-2 border border-yellow-500">3</div>
      <div className="h-48 p-2 border border-orange-500 ">4</div>
    </div>
    </div> */
