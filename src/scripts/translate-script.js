const codonToAATable = {
  GCT: 'Ala',
  GCC: 'Ala',
  GCA: 'Ala',
  GCG: 'Ala',
  TTA: 'Leu',
  TTG: 'Leu',
  CTT: 'Leu',
  CTC: 'Leu',
  CTA: 'Leu',
  CTG: 'Leu',
  CGT: 'Arg',
  CGC: 'Arg',
  CGA: 'Arg',
  CGG: 'Arg',
  AGA: 'Arg',
  AGG: 'Arg',
  AAA: 'Lys',
  AAG: 'Lys',
  AAT: 'Asn',
  AAC: 'Asn',
  ATG: 'Met',
  GAT: 'Asp',
  GAC: 'Asp',
  TTT: 'Phe',
  TTC: 'Phe',
  TGT: 'Cys',
  TGC: 'Cys',
  CCT: 'Pro',
  CCC: 'Pro',
  CCA: 'Pro',
  CCG: 'Pro',
  CAA: 'Gln',
  CAG: 'Gln',
  TCT: 'Ser',
  TCC: 'Ser',
  TCA: 'Ser',
  TCG: 'Ser',
  AGT: 'Ser',
  AGC: 'Ser',
  GAA: 'Glu',
  GAG: 'Glu',
  ACT: 'Thr',
  ACC: 'Thr',
  ACA: 'Thr',
  ACG: 'Thr',
  GGT: 'Gly',
  GGC: 'Gly',
  GGA: 'Gly',
  GGG: 'Gly',
  TGG: 'Trp',
  CAT: 'His',
  CAC: 'His',
  TAT: 'Tyr',
  TAC: 'Tyr',
  ATT: 'Ile',
  ATC: 'Ile',
  ATA: 'Ile',
  GTT: 'Val',
  GTC: 'Val',
  GTA: 'Val',
  GTG: 'Val',
  TAG: '*',
  TGA: '*',
  TAA: '*',
};

// splits input string to uppercae triplets
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

const translateDna = (dna) => {
  let protein = [];
  if (checkForTriplets(dna) === false) {
    throw Error(
      'DNA is not in triplets - please input sequence with complete triplets.'
    );
  } else {
    // split into triplets
    const dnaArray = dnaToArray(dna);
    // look up codons
    for (let codon of dnaArray) {
      protein.push(codonToAATable[codon]);
    }
  }
  return protein.join('-');
};

export { dnaToArray, checkForTriplets, translateDna };
