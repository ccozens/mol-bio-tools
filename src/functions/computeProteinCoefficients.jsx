import React, { useState, useEffect } from 'react';
import { convertThreeToOneLetter } from './convertThreeToOneLetter';
import { computeProteinMW } from './computeProteinMW';
import { absCoefficients } from './lookupTables';

// destructure import
const [extTyr, extTrp, extCys_paired, extCys_reduced] = [
  absCoefficients.extTyr,
  absCoefficients.extTrp,
  absCoefficients.extCys_paired,
  absCoefficients.extCys_reduced,
];

// coefficients for proteins in water measured at 280 nm

export const ComputeExtinctionCoefficients = ({
  protein,
  outFormat,
}) => {
  const [proteinArray, setProteinArray] = useState([]);

  // note regex (/[- .]/) to strip spacers from protein
  useEffect(() => {
    outFormat === 'threeLetter'
      ? setProteinArray(Array.from(convertThreeToOneLetter(protein)))
      : setProteinArray(Array.from(protein.replace(/[- .]/g, '')));
  }, [protein, outFormat]);

  // call proteinMW
  const [protMW, setprotMW] = useState(0);
  useEffect(() => {
    setprotMW(computeProteinMW(proteinArray));
  }, [proteinArray]);

  // calc protein length (remove * if present at end)
  const proteinLength =
    proteinArray.at(-1) === '*'
      ? proteinArray.pop().length
      : proteinArray.length;

  // blanks for AA counts
  let countCys = 0;
  let countTyr = 0;
  let countTrp = 0;
  // count AAs
  proteinArray.forEach((resi) => {
    if (resi === 'C') {
      countCys++;
    }
    if (resi === 'Y') {
      countTyr++;
    }
    if (resi === 'W') {
      countTrp++;
    }
  });

  let extinctionCoefficientCysPaired =
    countTrp * extTrp +
    countTyr * extTyr +
    (countCys + extCys_paired);

  let extinctionCoefficientCysReduced =
    countTrp * extTrp +
    countTyr * extTyr +
    (countCys + extCys_reduced);

  let absCysPaired = extinctionCoefficientCysPaired / protMW;
  let absCysReduced = extinctionCoefficientCysReduced / protMW;

  return (
    <div
      className="place-items-center mx-auto lg:block xl:inline-flex lg:mt-4"
      aria-label="Computed parameters"
    >
      <div className="grid grid-cols-3 pl-5">
        <div className="col-span-2 pr-1">Length: </div>{' '}
        <div>{proteinLength} amino acids </div>
        <div className="col-span-2 pr-1">MW:</div>{' '}
        <div> {protMW.toFixed(1)} Da </div>
        <div className="col-span-2 pr-1">
          Extinction coefficient (Cys paired):
        </div>{' '}
        <div> {extinctionCoefficientCysPaired.toFixed(1)} </div>
        <div className="col-span-2 pr-1">
          Extinction coefficient (Cys reduced):
        </div>{' '}
        <div> {extinctionCoefficientCysReduced.toFixed(1)} </div>
        <div className="col-span-2 pr-1">A280 (Cys paired):</div>{' '}
        <div> {absCysPaired.toFixed(3)} </div>
        <div className="col-span-2 pr-1">
          A280 (Cys reduced):
        </div>{' '}
        <div> {absCysReduced.toFixed(3)} </div>
        <div className="col-span-3 text-sm border-t-2 border-slate-800/50">
          Extinction coefficients are M<sup>-1</sup> cm<sup>-1</sup>{' '}
          at 280 nm in water
        </div>
        <div className="col-span-3 text-sm">
          A<sub>280</sub> = Abs 0.1% (1 g/l)
        </div>
      </div>
    </div>
  );
};
