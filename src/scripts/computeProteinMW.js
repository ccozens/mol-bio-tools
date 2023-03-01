import {aaMW} from './lookupTables'
  
  export const computeProteinMW = (proteinArray) => {
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





/*   const computeMW = (protein) => {
    proteinArray = protein[1].match(/[a-z]/) ? Array.from(convertThreeToOneLetter(protein)) : Array.from(protein);
    const proteinLength = proteinArray.length;
    // calc MW
    let proteinMW = 0;
    proteinArray.forEach((pos) => {
      proteinMW += aaMW[pos];
    });
    const waterMW = 18.0107946;
    let protMW = proteinMW+waterMW;
    return {protMW, proteinLength};
  };

  
  
const computeExtinctionCoefficients = (protein) => {
  // compute protein array
  proteinArray = protein[1].match(/[a-z]/) ? Array.from(convertThreeToOneLetter(protein)) : Array.from(protein);
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
    return {extinctionCoefficientCysPaired, extinctionCoefficientCysReduced}
};



 const computeAbs = (extinctionCoefficientCysPaired, extinctionCoefficientCysReduced, protMW) => {
    let absCysPaired = extinctionCoefficientCysPaired / protMW;
    let absCysReduced = extinctionCoefficientCysReduced / protMW;
    return {absCysPaired, absCysReduced};
 }

 export const ProteinParameters = ({protein}) => {
  computeMW(protein);
  computeExtinctionCoefficients(protein);
  computeAbs(protein);
  
  return(
    <div>
      beep
      <div>{ computeMW.protMW }</div>
      <div>{ computeMW.proteinLength }</div>
      <div>{ computeExtinctionCoefficients.extinctionCoefficientCysPaired }</div>
      <div>{ computeExtinctionCoefficients.extinctionCoefficientCysReduced }</div>
      <div>{ computeAbs.absCysPaired }</div>
      <div>{ computeAbs.absCysReduced }</div>
    </div>
  )
 } */
 
/* E(Prot) = Numb(Tyr)*Ext(Tyr) + Numb(Trp)*Ext(Trp) + Numb(Cystine)*Ext(Cystine)

where (for proteins in water measured at 280 nm): Ext(Tyr) = 1490, Ext(Trp) = 5500, Ext(Cystine) = 125;
The absorbance (optical density) can be calculated using the following formula:

Absorb(Prot) = E(Prot) / Molecular_weight*/

/* Extinction coefficients are in units of  M-1 cm-1, at 280 nm measured in water.

Ext. coefficient    23045
Abs 0.1% (=1 g/l)   1.341, assuming all pairs of Cys residues form cystines


Ext. coefficient    22920
Abs 0.1% (=1 g/l)   1.334, assuming all Cys residues are reduced */

