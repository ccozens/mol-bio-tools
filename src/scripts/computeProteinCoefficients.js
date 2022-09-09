import React, { useState, useEffect } from 'react';
import { convertThreeToOneLetter } from './convertThreeToOneLetter';
import { computeProteinMW }from './computeProteinMW'; 

// declare global vars
    

    // blank for proteinArray
    // let proteinArray = [];

    // coefficients for proteins in water measured at 280 nm
    const extTyr = 1490;
    const extTrp = 5500;
    const extCys_paired = 125;
    const extCys_reduced = 0;


  
  
  
export const ComputeExtinctionCoefficients = ( {protein, outFormat} ) => {

  const [ proteinArray, setProteinArray] = useState([]);

  useEffect(() => {outFormat === 'threeLetter' ?
    setProteinArray(Array.from(convertThreeToOneLetter(protein))) : 
    setProteinArray(Array.from(protein))}, [protein, outFormat]);

  
  // call proteinMW
  const [ protMW, setprotMW] = useState(0);
  useEffect(() => {setprotMW(computeProteinMW(proteinArray))}, [proteinArray]);
  // protMW = computeProteinMW(proteinArray);
  // calc protein length
  const proteinLength = proteinArray.length;

  // blanks for AA counts
  let countCys = 0;
  let countTyr = 0;
  let countTrp = 0;
  // count AAs 
  proteinArray.forEach((resi) => { if ( resi === 'C') { countCys++}
                                     if (resi === 'Y') { countTyr++}
                                     if (resi === 'W') { countTrp++}});
  
    let extinctionCoefficientCysPaired = (countTrp*extTrp) + (countTyr*extTyr) + (countCys+extCys_paired);
    let extinctionCoefficientCysReduced = (countTrp*extTrp) + (countTyr*extTyr) + (countCys+extCys_reduced);
    let absCysPaired = extinctionCoefficientCysPaired / protMW;
    let absCysReduced = extinctionCoefficientCysReduced / protMW;
    
    return (
      <div className="grid grid-cols-3  pl-5 w-full">
                <div className="col-span-2">Length: </div> <div>{proteinLength} amino acids </div>
                <div className="col-span-2">MW:</div> <div > {protMW.toFixed(1)} Da </div>
                <div className="col-span-2">Extinction coefficient (Cys paired):</div> <div > {extinctionCoefficientCysPaired.toFixed(1)} </div>
                <div className="col-span-2">Extinction coefficient (Cys reduced):</div> <div > {extinctionCoefficientCysReduced.toFixed(1)} </div>
                <div className="col-span-2">A280 (Cys paired):</div> <div > {absCysPaired.toFixed(3)} </div>
                <div className="col-span-2">A280 (Cys reduced):</div> <div > {absCysReduced.toFixed(3)} </div>
                <div className="col-span-3 text-sm border-t-2 border-slate-800/50">Extinction coefficients are M-1 cm-1 at 280 nm in water</div>
                <div className="col-span-3 text-sm">A280 = Abs 0.1% (1 g/l)</div>
              </div>
    )
};


