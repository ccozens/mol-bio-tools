import { countNucleotides } from "./count-nt";
// all numbers from Ambion: https://www.thermofisher.com/uk/en/home/references/ambion-tech-support/rna-tools-and-calculators/dna-and-rna-molecular-weights-and-conversions.html

// lookuptable
const ntMW = {
  ATP: 507.2,
  CTP: 483.2,
  GTP: 523.2,
  UTP: 484.2,
  NTP: 499.5,
  AMP: 347.2,
  CMP: 323.2,
  GMP: 363.2,
  UMP: 324.2,
  NMP: 339.5,
  A: 329.2,
  C: 305.2,
  G: 345.2,
  U: 306.2,
  N: 320.5,
  dATP: 491.2,
  dCTP: 467.2,
  dGTP: 507.2,
  dTTP: 482.2,
  dNTP: 487.0,
  dAMP: 331.2,
  dCMP: 307.2,
  dGMP: 347.2,
  dTMP: 322.2,
  dNMP: 327.0,
  dA: 313.2,
  dC: 289.2,
  dG: 329.2,
  dT: 304.2,
  dN: 303.7,
  monophosphate: 79,
  triphosphate: 159,
};

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
    let dnaArray = Array.from(dna).map(char => 'd' + char); // map appends d to each nt so DNA nts lookedup
    // calc MW
      let dnaMW = 0;
      dnaArray.forEach((pos) => {
        dnaMW += ntMW[pos];
          });
      const phosphate = ntMW.monophosphate;
      let finalDnaMW = dnaMW+phosphate;
      
      return (
        finalDnaMW
      );
    };

    export const exactDsDnaMw = (dna) => {
        let dnaArray = Array.from(dna).map(char => 'd' + char); // map appends d to each nt so DNA nts lookedup
    // calc MW
      let dnaMW = 0;
      dnaArray.forEach((pos) => {
        dnaMW += ntMW[pos];
      });
      const phosphate = ntMW.monophosphate;
      let finalDnaMW = (dnaMW+phosphate)*2;
      
      return (
        finalDnaMW
      );
    }

    export const gcRatio = (dna) => {
        let ntCounts = countNucleotides(dna);
        let gc = ntCounts.C + ntCounts.G;
        let at = ntCounts.A + ntCounts.T;
        return (gc/ (gc+at)).toFixed(3);
    }




  /* export const computeProteinMW = (proteinArray) => {
    // calc MW
      let proteinMW = 0;
      proteinArray.forEach((pos) => {
        proteinMW += aaMW[pos];
      });
      const waterMW = 18.0107946;
      let protMW = proteinMW+waterMW;
  
      return (
        protMW
      );
    };
    */