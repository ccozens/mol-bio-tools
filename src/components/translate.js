import React, { useState, useEffect } from 'react';
import { checkInput } from '../scripts/checkDnaInput-script';
import { translateDna } from '../scripts/translate-script';
import { ProteinProperties } from './proteinProperties';
import { computeMW, computeExtinctionCoefficients, computeAbs } from '../scripts/computeParameters';
// const ProteinProperties = React.lazy(() => import('./proteinProperties'));

              
export const Translate = () => {
  // control textbox default content and updating
  const [input, setInput] = useState(
    'GTTATCTATGAGCAGATCACCCGCGATCTG'
  );

  const handleTextChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = (event) => {
    if (input === 'GTTATCTATGAGCAGATCACCCGCGATCTG') {
      setInput('');}
  };


  // control protein format
  const [outFormat, setOutFormat] = useState('threeLetter');
  // formatting for text on button: Show xx code
  let letterSwitch =
    outFormat === 'threeLetter' ? 'One letter' : 'Three letter';

  // control protein spacer
  const [spacer, setSpacer] = useState('');

  const spacerOptions = [
    { value: '-', label: 'hyphen (-)' },
    { value: '.', label: 'dot (.)' },
    { value: ' ', label: 'space ( )' },
    { value: '', label: 'no space ()' },
  ];

  const listSpacerOptions = spacerOptions.map((item) => (
    <option value={item.value} key={item.value}>
      {item.label}
    </option>
  ));

  const updateSpacer = (event) => {
    setSpacer(event.target.value);
  };

  // onChange handler for protein view toggle button
  const switchOutFormat = () =>  {setOutFormat(outFormat === 'threeLetter' ? 'oneLetter' : 'threeLetter')};
  
  // check input
  const [checkedInput, setCheckedInput] = useState(checkInput(input));
  // update when input changes
  useEffect(() => {setCheckedInput(checkInput(input))}, [input]);

  // check translate protein
  const [protein, setProtein] = useState(translateDna(checkedInput, outFormat, spacer));
  
  // call setProtein to update protein when checked input, outFormat or spacer changes
    useEffect(() => {setProtein(translateDna(checkedInput, outFormat, spacer));}, [checkedInput, outFormat, spacer]);

  // vars for protein parameters
  const { protMW, proteinLength } = computeMW(protein);
  const extinctionCoefficientCysPaired = computeExtinctionCoefficients(protein).extinctionCoefficientCysPaired;
  const extinctionCoefficientCysReduced = computeExtinctionCoefficients(protein).extinctionCoefficientCysReduced;
  const {absCysPaired, absCysReduced } = computeAbs(extinctionCoefficientCysPaired, extinctionCoefficientCysReduced, protMW);
  
  
  return (
    <div
    className="container gap-4 px-4 py-8 mx-auto text-2xl my-3 bg-orange-300"
    id="Translate"
    >
      <p>Translate DNA to protein</p>
      <div className="columns-2">
        <div className="p-2 text-lg">
          <p>Enter DNA Here:</p>
        </div>
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
          <p className="hidden md:block">
            Protein sequence will show here:
          </p>
          <p className="md:hidden">Protein sequence:</p>

          <div className="columns-2 ">
            <div
              id="protein view toggle"
              className="p-1 text-sm border rounded cursor-pointer switch border-slate-600 bg-mimosa-std hover:bg-mimosa-light hover:border-slate-400"
            >
              <div
                aria-label="protein view toggle"
                className="button"
                onClick={switchOutFormat}
              >
                <p className="hidden md:block">
                  {' '}
                  Show {letterSwitch.toLowerCase()} code{' '}
                </p>
                <p className="md:hidden">{letterSwitch}</p>
              </div>
            </div>
            <select
              id="protein spacer toggle"
              aria-label="spacer toggle"
              className="p-1 text-sm border rounded w-min dropdown-toggle border-slate-600 bg-mimosa-std hover:bg-mimosa-light hover:border-slate-400"
              onChange={updateSpacer}
            >
              <option defaultValue={''}>Spacer</option>
              {listSpacerOptions}
            </select>
          </div>
        </div>
        <div
          id="outputBox"
          className="h-40 p-2 text-base border rounded border-slate-600 bg-mimosa-std"
          aria-label="Protein output"
        >
          {protein}
        </div>
      </div>
      <div className="h-48 p-2 mt-2 text-base border rounded border-slate-600 bg-mimosa-std min-h-16 ">
        <p className="text-center text-xl w-full mx-auto">Protein parameters</p>

        <div className="flex">
      < ProteinProperties 
              outFormat={outFormat} 
              protein={protein}
              />
              <div className="grid grid-cols-3  pl-5 w-full">
                <div className="col-span-2">Length: </div> <div>{proteinLength} amino acids </div>
                <div className="col-span-2">MW:</div> <div > {protMW.toFixed(1)} Da </div>
                <div className="col-span-2">Extinction coefficient (Cys paired):</div> <div > {extinctionCoefficientCysPaired.toFixed(1)} </div>
                <div className="col-span-2">Extinction coefficient (Cys reduced):</div> <div > {extinctionCoefficientCysReduced.toFixed(1)} </div>
                <div className="col-span-2">A280 (Cys paired):</div> <div > {absCysPaired.toFixed(3)} </div>
                <div className="col-span-2">A280 (Cys reduced):</div> <div > {absCysReduced.toFixed(3)} </div>
              </div>
              </div>
          </div>
    </div>
  );
};

