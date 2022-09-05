import React, { useState } from 'react';
import { checkInput } from '../scripts/checkDnaInput-script';
import { translateDna } from '../scripts/translate-script';
import { aaCount_individual } from '../scripts/chartSeq';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  Text,
} from 'recharts';

export const Translate = () => {
  // control textbox default content and updating
  const [input, setInput] = useState(
    'GTTATCTATGAGCAGATCACCCGCGATCTG'
  );

  const handleTextChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = (event) => {
    if ( input === 'GTTATCTATGAGCAGATCACCCGCGATCTG') 
    {setInput('')};
  };

  // control protein format
  const [outFormat, setOutFormat] = useState('threeLetter');
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

  // check input and translate protein
  const checkedInput = checkInput(input);
  const protein = translateDna(checkedInput, outFormat, spacer);

  // protein for chart
  const proteinForChart = translateDna(checkedInput, 'oneLetter', '');
  const proteinAACounts = aaCount_individual(proteinForChart);

  const proteinBar = (
    <BarChart data={proteinAACounts} width={600} height={400}>
      <Text>beep</Text>
      <Bar dataKey="count" fill="#8884d8" />
      <XAxis dataKey="resi" />
      <YAxis>
        {' '}
        <Label
          value="AA count"
          angle="-90"
          position="insideLeft"
        ></Label>
      </YAxis>
      <Tooltip />
      <CartesianGrid strokeDasharray={3} />
    </BarChart>
  );

  return (
    <div
      className="container gap-4 px-4 py-8 mx-auto text-2xl"
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
                <p className="hidden md:block">
                  {' '}
                  Show {letterSwitch.toLowerCase()} code{' '}
                </p>
                <p className="md:hidden">{letterSwitch}</p>
              </div>
            </div>
            <select
              aria-label="spacer toggle"
              className="p-1 text-sm border rounded w-min dropdown-toggle border-slate-600 bg-mimosa-std hover:bg-mimosa-light hover:border-slate-400"
              onChange={updateSpacer}
            >
              <option defaultValue={spacer}>Spacer</option>
              {listSpacerOptions}
            </select>
          </div>
        </div>
        <div
          id="outputBox"
          className="h-40 p-2 text-base border rounded border-slate-600 bg-mimosa-std"
        >
          {protein}
        </div>
      </div>

      <div className="border border-red-400 columns-2">
        <container>
          <p className="text-center">Chart title</p>

          {proteinBar}
        </container>
        <p>
          - Add button on/near chart to switch between counts and
          ratio
        </p>
        <p>- Show stats here: resi counts/freq, MW, pI</p>
        <p>- Add tryptic digest option</p>
        <p>
          - Split these out into protein tools component, accessable
          via this page and protein tools page
        </p>
        <p>- tests!</p>
      </div>
    </div>
  );
};
