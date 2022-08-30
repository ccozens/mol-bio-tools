import React, { useState } from 'react';
import Select from 'react-select';
import { checkInput } from '../scripts/checkDnaInput-script';
import { translateDna } from '../scripts/translate-script';
export const Translate = () => {
  // control textbox default content and updating
  const [input, setInput] = useState(
    'GTTATCTATGAGCAGATCACCCGCGATCTG'
  );

  const handleTextChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    setInput('');
  };

  // control protein format
  const [outFormat, setOutFormat] = useState('threeLetter');
  let letterSwitch =
    outFormat === 'threeLetter' ? 'one letter' : 'three letter';

  // control protein spacer
  const [spacer, setSpacer] = useState('');

  // check input and translate protein
  const checkedInput = checkInput(input);
  const protein = translateDna(checkedInput, outFormat, spacer);
  const updateSpacer = (event) => {
    setSpacer(event.target.value);
  };

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
          <div className="columns-2 ">
            <div className="p-1 text-sm border rounded cursor-pointer switch border-slate-600 bg-slate-800 hover:bg-slate-600 hover:border-slate-400">
              <div
                className="button"
                onClick={() =>
                  setOutFormat(
                    outFormat === 'threeLetter'
                      ? 'oneLetter'
                      : 'threeLetter'
                  )
                }
              >
                Show {letterSwitch} code
              </div>
            </div>

            <select
              id="#spacer"
              className="p-1 text-sm border rounded w-min dropdown-toggle border-slate-600 bg-slate-800"
              onChange={updateSpacer}
            >
              <option defaultValue={spacer}>
                Modify spacer
              </option>
              <option value="-">hyphen (-) </option>
              <option value=".">dot (.)</option>
              <option value=" ">space ( )</option>
              <option value="">no space ( )</option>
            </select>
          </div>
        </div>
        <div
          id="outputBox"
          className="h-40 p-2 text-base border rounded border-slate-600 bg-slate-800"
        >
          {protein}
        </div>
      </div>
    </div>
  );
};

/* <p>Spacer
            <Select id="#spacer" className="p-1 text-sm border rounded dropdown-toggle border-slate-600 bg-slate-800" onChange={updateSpacer} options={spacerOptions} defaultValue={spacerOptions[4]} value={spacerOptions.value}/> </p>*/
