import { checkDnaInput } from "./checkDnaInput";

export function complementDNA(dna) {
  const checkedDna = checkDnaInput(dna);
  if (checkedDna.includes('Non-DNA')) { return checkedDna}
  
  const dnaArray = Array.from(checkedDna);
  let dnaComplementary = [];
  dnaArray.forEach((x) => {
    if (x === 'A') {
      dnaComplementary.push('T');
    } else if (x === 'C') {
      dnaComplementary.push('G');
    } else if (x === 'G') {
      dnaComplementary.push('C');
    } else if (x === 'T') {
      dnaComplementary.push('A');
    }
  });
  return dnaComplementary.join('');
}
