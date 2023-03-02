import { countNucleotides } from './count-nt';
import { ntMW } from './lookupTables';

// approx MW
export const approxRnaMw = (dna) => {
  return dna * ntMW.N + 159;
};

export const approxSsDnaMw = (dna) => {
  return dna * ntMW.dN + 79;
};

export const approxDsDnaMw = (dna) => {
  return dna * (ntMW.dN * 2) + 157.9;
};

// exact MW
export const exactSsDnaMw = (dna: string) => {
  let dnaArray = Array.from(dna).map((char) => 'd' + char); // map appends d to each nt so DNA nts lookedup
  // calc MW
  let dnaMW = 0;
  dnaArray.forEach((pos) => {
    dnaMW += ntMW[pos];
  });
  const phosphate = ntMW.monophosphate;
  let finalDnaMW = dnaMW + phosphate;

  return finalDnaMW;
};

export const exactDsDnaMw = (dna) => {
  let dnaArray = Array.from(dna).map((char) => 'd' + char); // map appends d to each nt so DNA nts lookedup
  // calc MW
  let dnaMW = 0;
  dnaArray.forEach((pos) => {
    dnaMW += ntMW[pos];
  });
  const phosphate = ntMW.monophosphate;
  let finalDnaMW = (dnaMW + phosphate) * 2;

  return finalDnaMW;
};

export const gcRatio = (dna) => {
  let ntCounts = countNucleotides(dna);
  let gc = ntCounts.C + ntCounts.G;
  let at = ntCounts.A + ntCounts.T;
  return (gc / (gc + at)).toFixed(3);
};
