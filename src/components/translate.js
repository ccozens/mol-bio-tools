import React, { useState } from 'react';
import { checkInput } from '../scripts/checkDnaInput-script';
import { translateDna } from '../scripts/translate-script';
export const Translate = () => {
  const [input, setInput] = useState(
    'GTTATCTATGAGCAGATCACCCGCGATCTG'
  );

  const handleTextChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    setInput('');
  };

  const checkedInput = checkInput(input);

  const protein = translateDna(checkedInput);

  return (
    <div className="container gap-4 p-4 mx-auto text-2xl">
      Translate DNA to protein
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
            aria-label="DNA input form for translate"
          />
        </div>
        <div className="p-2 text-lg ">
          Protein sequence will show here:
        </div>
        <div
          id="outputBox"
          className="h-48 p-2 text-base border rounded border-slate-600 bg-slate-800"
        >
          {protein}
        </div>
      </div>
    </div>
  );
};
