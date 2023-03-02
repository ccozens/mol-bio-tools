import {
  codonToAATableOneLetter,
  codonToAATableThreeLetter,
} from './lookupTables';

// splits input string to uppercase triplets
const dnaToArray = (dna) => {
  let tempArray = [];
  const dnaUpper = dna.toUpperCase();
  for (let i = 0; i < dnaUpper.length; i += 3) {
    tempArray.push(dnaUpper.slice(i, i + 3));
  }
  return tempArray;
};

const checkForTriplets = (dna) => {
  return dna.length % 3 === 0 ? true : false;
};

const translateDna = (dna, outFormat, proteinJoin) => {
  let protein = [];
  if (
    dna.includes('Non-DNA character entered, please enter ATCG only')
  ) {
    return dna;
  } else {
    if (checkForTriplets(dna) === false) {
      return 'DNA is not in triplets - please input sequence with complete triplets.';
    } else {
      // split into triplets
      const dnaArray = dnaToArray(dna);
      if (outFormat === 'threeLetter') {
        // look up codons
        for (let codon of dnaArray) {
          protein.push(codonToAATableThreeLetter[codon]);
        }
      } else {
        if (outFormat === 'oneLetter')
          for (let codon of dnaArray) {
            protein.push(codonToAATableOneLetter[codon]);
          }
      }

      return protein.join(proteinJoin);
    }
  }
};

// check react - make form reset each render???

export { dnaToArray, checkForTriplets, translateDna };
