import React, { useState } from 'react';
import { checkDnaInput } from '../scripts/checkDnaInput';
import { approxRnaMw, approxSsDnaMw, approxDsDnaMw, exactSsDnaMw, exactDsDnaMw } from '../scripts/dnaAnalysis.ts';

export const AnalyseDNA = () => {
  const [lenInput, setNumInput] = useState(1000);
  const [input, setInput] = useState('ATGCAA');

  const handleTextChange = (event) => {
    // set input to entered text
    setInput(event.target.value);
  };

  const handleNumChange = (event) => {
    // set input to entered text
    setNumInput(event.target.value);
  };

  const [count, setCount] = useState(0);
  const handleClick = (event) => {
    if (count === 0) {
      setInput('');
      setCount(count + 1);
    }
  };

  const checkedInput = checkDnaInput(input);
  const valueApproxSsDnaMW = approxSsDnaMw(lenInput);
  const valueApproxDsDnaMW = approxDsDnaMw(lenInput);
  const valueExactSsDnaMw = exactSsDnaMw(checkedInput);
  const valueExactDsDnaMw = exactDsDnaMw(checkedInput);
  
  return (
    <div
      className="container px-4 py-6 scroll-mt-20 mx-auto text-2xl bg-orange-200/50 my-5"
      id="Analyse DNA"
    >
      Analyse DNA
      <div className="grid grid-cols-2 gap-x-6 border-collapse">
        <div className="p-2 text-lg">
          
          Enter DNA length for approx MW:
          <div className="h-12 p-2 text-base border rounded border-slate-600 bg-amber-200/50 min-h-16">
            <textarea
              id="numInputBox"
              className="w-full h-full p-2 bg-transparent"
              value={lenInput}
              onChange={handleNumChange}
              onClick={handleClick}
              type="text"
              aria-label="DNA input for quick molecular weight calculation"
            />
          </div>
        </div>
        <div className="p-2 text-lg">
          
          Approx MW (dsDNA):
          <div className="p-2 text-base border rounded border-slate-600 bg-amber-200/50 h-12">
            
            {valueApproxDsDnaMW}
          </div>
        </div>
        <div>
          <div className="p-2 text-lg">Enter DNA sequence for exact MW:</div>
          <div className="h-48 p-2 text-base border rounded border-slate-600 bg-amber-200/50 min-h-16">
            <textarea
              id="inputBox"
              className="w-full h-full p-2 bg-transparent  overflow-y-auto scrollbar"
              value={input}
              onChange={handleTextChange}
              onClick={handleClick}
              type="text"
              aria-label="DNA input form for DNA analysis"
            />
          </div>
        </div>

        {/* output for approx MW given length */}

        {/* output for DNA length */}
        {/* output for ATGC % */}
        {/* output for exact MW */}
        {/* ss / ds / RNA dropdown - allow any entry, check if RNA, if not transcribe, 5'P ?? */}

        <div>
          <div className="p-2 text-lg ">Exact MW (dsDNA):</div>
          <div
            id="outputBox"
            aria-label="DNA MW output"
            className="h-48 p-2 text-base border rounded border-slate-600 bg-amber-200/50 overflow-y-auto scrollbar"
          >
            {valueExactDsDnaMw}
          </div>
        </div>
      </div>
    </div>
  );
};
