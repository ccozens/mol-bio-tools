import React, { useState, useEffect } from 'react';
import { checkProteinThreeLetterInput } from '../scripts/checkProteinThreeLetterInput';
import { convertThreeToOneLetter } from '../scripts/convertThreeToOneLetter';

export const ReformatProtein = () => {
  const [input, setInput] = useState('MetIleLeuAsp');

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

  // check input and format protein
  const checkedProtein = checkProteinThreeLetterInput(input);
  const [convertedProtein, setconvertedProtein] = useState(
    convertThreeToOneLetter(checkedProtein)
  );

  // call setProtein to update protein when checked input, outFormat or spacer changes
  useEffect(() => {
    setconvertedProtein(convertThreeToOneLetter(checkedProtein));
  }, [checkedProtein]);

  return (
    <div
      className="container px-4 py-6 scroll-mt-20 mx-auto text-2xl bg-orange-200/50 my-5"
      id="Reformat protein"
    >
      Reformat protein
      <div className="columns-2">
        <div className="p-2 text-lg">Enter protein here:</div>
        <div className="h-48 p-2 text-base border rounded border-slate-600 bg-amber-200/50 min-h-16">
          <textarea
            id="inputBox"
            className="w-full h-full p-2 bg-transparent overflow-y-auto scrollbar"
            value={input}
            onChange={handleTextChange}
            onClick={handleClick}
            type="text"
            aria-label="Protein input form for reformat protein"
          />
        </div>
        <div className="hidden p-2 text-lg md:block">
          Reformatted protein will show here:
        </div>
        <div className="p-2 text-lg md:hidden ">
          Reformatted protein:
        </div>
        <div
          id="outputBox"
          aria-label="reformat protein output"
          className="h-48 p-2 text-base border rounded border-slate-600 bg-amber-200/50 overflow-y-auto scrollbar"
        >
          {convertedProtein}
        </div>
      </div>
      <div className="col-2">
        {checkedProtein.includes('Non-') === true ? (
          <p className="text-lg text-center bg-orange-500/50 font-semibold my-1">
            {' '}
            {checkedProtein}
          </p>
        ) : (
          <p></p>
        )}
        <a
          className="py-1 px-8 text-lg w-fit border rounded cursor-pointer border-slate-600 bg-amber-200/30 hover:bg-amber-200/40 hover:border-slate-400 hover:font-semibold"
          href="#Analyse protein"
        >
          Back to Analyse protein
        </a>
      </div>
    </div>
  );
};
