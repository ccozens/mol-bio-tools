export function complementDNA(dna) {
  const dnaArray = Array.from(dna);
  let dnaComplementary = [];
  dnaArray.map((x) => {
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

/* // alternative - slower
let pairs = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);
 */
/* 
// alternative map dict - slower
function DNAStrand_someones(dna) { return dna.split('').map(function(v) {return {A:'T', T:'A', C:'G', G:'C'}[v];}).join('')};

 */
