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
    outFormat === 'threeLetter' ? 'One letter' : 'Three letter';

  // control protein spacer
  const [spacer, setSpacer] = useState('');
  
  const spacerOptions = [
    {value: '-', label: 'hyphen (-)'},
    {value: '.', label: 'dot (.)'},
    {value: ' ', label: 'space ( )'},
    {value: '', label: 'no space ()'},
  ]
  
  const updateSpacer = (event) => {
    setSpacer(event.value);
  };

  // check input and translate protein
  const checkedInput = checkInput(input);
  const protein = translateDna(checkedInput, outFormat, spacer);

  return (
    <div className="container gap-4 px-4 py-8 mx-auto text-2xl" id="Translate">
      <p>Translate DNA to protein</p>
      <div className="columns-2">
        <div className="p-2 text-lg"><p>Enter DNA Here:</p></div>
        <div className="h-48 p-2 text-base border rounded border-slate-600 bg-mimosa-std min-h-16">
          <textarea
            id="inputBox"
            className="w-full h-full p-2 bg-mimosa-std"
            value={input}
            onChange={handleTextChange}
            onClick={handleClick}
            type="text"
            aria-label="DNA input form for translate"
          />
        </div>
        <div className="p-2 text-lg">
          <p className="hidden md:block">Protein sequence will show here:</p>
          <p className="md:hidden">Protein sequence:</p>
          
          <div className="columns-2 ">
            <div className="p-1 text-sm border rounded cursor-pointer switch border-slate-600 bg-mimosa-std hover:bg-mimosa-light hover:border-slate-400">
              <div
              aria-label="protein view toggle"
                className="button"
                onClick={() =>
                  setOutFormat(
                    outFormat === 'threeLetter'
                      ? 'oneLetter'
                      : 'threeLetter'
                  )
                }
              >
                <p className="hidden md:block">Show {letterSwitch.toLowerCase()} code</p>
                <p className="md:hidden">{letterSwitch}</p>
              </div>
            </div>
                < Select
                aria-label="spacer toggle"
                className="p-1 text-sm border rounded w-min dropdown-toggle border-slate-600 bg-mimosa-std hover:bg-mimosa-light hover:border-slate-400"
                defaultValue={spacer}
                value={spacer}
                onChange={updateSpacer}
                options={spacerOptions}
             />
          </div>
        </div>
        <div
          id="outputBox"
          className="h-40 p-2 text-base border rounded border-slate-600 bg-mimosa-std"
        >
          {protein}
        </div>
      </div>
    </div>
  );
};

/* <p>Spacer
            <Select id="#spacer" className="p-1 text-sm border rounded dropdown-toggle border-slate-600 bg-mimosa" onChange={updateSpacer} options={spacerOptions} defaultValue={spacerOptions[4]} value={spacerOptions.value}/> </p>*/
/* 
<select
              aria-label="spacer toggle"
              className="p-1 text-sm border rounded w-min dropdown-toggle border-slate-600 bg-mimosa-std hover:bg-mimosa-light hover:border-slate-400"
              onChange={updateSpacer}
            >
              <option defaultValue={spacer}>
                Spacer
              </option>
              <option value="-">hyphen (-) </option>
              <option value=".">dot (.)</option>
              <option value=" ">space ( )</option>
              <option value="">no space ( )</option>
            </select>*/