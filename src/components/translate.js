import React, { useState, useEffect } from 'react';
import { checkDnaInput } from '../scripts/checkDnaInput';
import { translateDna } from '../scripts/translate-script';
import { ComputeExtinctionCoefficients } from '../scripts/computeProteinCoefficients';
import { ProteinChart } from './proteinChart';
import { tgo } from '../scripts/lookupTables';

export const Translate = () => {
  // control textbox default content and updating
  const [input, setInput] = useState(tgo.dna);

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
  const switchOutFormat = () => {
    setOutFormat(
      outFormat === 'threeLetter' ? 'oneLetter' : 'threeLetter'
    );
  };

  // check input
  const [checkedInput, setCheckedInput] = useState(
    checkDnaInput(input)
  );
  // update when input changes
  useEffect(() => {
    setCheckedInput(checkDnaInput(input));
  }, [input]);

  // check translate protein
  const [protein, setProtein] = useState(
    translateDna(checkedInput, outFormat, spacer)
  );

  // call setProtein to update protein when checked input, outFormat or spacer changes
  useEffect(() => {
    setProtein(translateDna(checkedInput, outFormat, spacer));
  }, [checkedInput, outFormat, spacer]);

  return (
    <div
      className="container gap-4 px-4 py-6 scroll-mt-20 mx-auto text-2xl my-5 bg-orange-200/50"
      id="Translate protein"
    >
      <p>Translate DNA to protein</p>
      <div className="columns-2">
        <div className="p-2 text-lg">
          <p>Enter DNA:</p>
        </div>
        <div className="h-48 p-2 text-base border rounded border-slate-600 bg-amber-200/50 min-h-16">
          <textarea
            id="inputBox"
            className="w-full h-full p-2 bg-transparent overflow-y-auto scrollbar"
            value={input}
            onChange={handleTextChange}
            onClick={handleClick}
            type="text"
            aria-label="DNA input form for translate"
          />
        </div>

        <div className="p-2 text-lg">
          <p>Protein sequence:</p>

          <div
            id="outputBox"
            className="h-40 p-2 mt-2 text-base border rounded border-slate-600 bg-amber-200/50 overflow-y-auto scrollbar"
            aria-label="Protein output"
          >
            {protein}
          </div>

          <div className="hidden sm:block columns-2 mt-1">
            <div className="p-1 text-sm border rounded cursor-pointer switch border-slate-600 bg-amber-200/50 hover:amber-200 hover:border-slate-400">
              <div
                aria-label="protein view toggle for large screen"
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
              aria-label="spacer toggle"
              className="p-1 text-sm border rounded w-min dropdown-toggle border-slate-600 bg-amber-200/50 hover:amber-200 hover:border-slate-400"
              onChange={updateSpacer}
            >
              <option defaultValue={''}>Toggle spacer</option>
              {listSpacerOptions}
            </select>
          </div>

          <div className="sm:hidden flex flex-col mt-1">
            <div className="p-1 text-sm border rounded mx-auto cursor-pointer text-center switch border-slate-600 bg-amber-200/50 hover:amber-200 hover:border-slate-400">
              <div
                aria-label="protein view toggle for small screen"
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
              id="protein spacer toggle for small screen"
              aria-label="spacer toggle  for small screen"
              className="p-1 text-sm border mx-auto mt-1 rounded w-min text-center dropdown-toggle border-slate-600 bg-amber-200/50 hover:amber-200 hover:border-slate-400"
              onChange={updateSpacer}
            >
              <option defaultValue={''}>Toggle spacer</option>
              {listSpacerOptions}
            </select>
          </div>
        </div>
      </div>
      <div className="xl:h-60 p-2 mt-2 text-base border rounded border-slate-600 bg-amber-200/50 min-h-16 ">
        <p className="text-center text-xl w-full mx-auto">
          Protein parameters
        </p>

        <div className="flex lg:flex-wrap">
          <ProteinChart protein={protein} outFormat={outFormat} />

          <ComputeExtinctionCoefficients
            protein={protein}
            outFormat={outFormat}
          />
        </div>
      </div>
    </div>
  );
};

/*

              */
