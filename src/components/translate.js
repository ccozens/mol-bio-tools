import React, { useState, useEffect } from 'react';
import { checkInput } from '../scripts/checkDnaInput-script';
import { translateDna } from '../scripts/translate-script';
import { countAAsOneLetter, countAAsThreeLetter } from '../scripts/proteinBarChartCounts';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label
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
    if (input === 'GTTATCTATGAGCAGATCACCCGCGATCTG') {
      setInput('');
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
  const switchOutFormat = () =>  {setOutFormat(outFormat === 'threeLetter' ? 'oneLetter' : 'threeLetter')};
  
// check input and translate protein
  const checkedInput = checkInput(input);
  const protein = translateDna(checkedInput, outFormat, spacer);
  
  // update proteinAACounts when outFormat or protein changes
  useEffect(() => {
    setproteinAACounts(outFormat === 'threeLetter'  ? countAAsThreeLetter(protein) : countAAsOneLetter(protein));
  }, [protein, outFormat]);
  
  
  // protein for chart
  const [proteinAACounts, setproteinAACounts] = useState(countAAsThreeLetter(protein));
  const proteinChartTitle = 'Amino acid composition';

  const proteinChartToolTip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="text-base rounded -py-3 custom-tooltip bg-mimosa-light/50">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  const proteinBar = (
    <ResponsiveContainer width={700} height={400}>
      <BarChart data={proteinAACounts} >
        <Bar dataKey="count" fill="#8884d8"></Bar>
        <XAxis dataKey="resi" fontSize="1rem" interval={0}>
          </XAxis>
        <YAxis fontSize="1rem">
          <Label
            value="AA proportion"
            angle="-90"
            position="insideLeft"
            fontSize="1rem"
          ></Label>
        </YAxis>
        <Tooltip content={proteinChartToolTip} />
        <CartesianGrid strokeDasharray={3} />
      </BarChart>
    </ResponsiveContainer>
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
        >
          {protein}
        </div>
      </div>

      <div className="flex">
        <div >
          <div className="max-w-screen-md text-center">
            {proteinChartTitle}
            {proteinBar}
          </div>
        </div>
        
        <div className="">
          <br></br>
          text
          blablabla
          blablabla
          blablabla
          blablablablablablablablablablablablablablablablablablablablablablablabla blablablablablabla blablablablablabla blablabla blablabla  blablablablablabla blablablablablabla blablablablablabla
        </div>
      </div>
    </div>
  );
};
