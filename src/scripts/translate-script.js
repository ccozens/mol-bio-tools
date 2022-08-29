const codonToAATableThreeLetter = {
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

const codonToAATableOneLetter = {
  GCT: 'A',
  GCC: 'A',
  GCA: 'A',
  GCG: 'A',
  TTA: 'L',
  TTG: 'L',
  CTT: 'L',
  CTC: 'L',
  CTA: 'L',
  CTG: 'L',
  CGT: 'R',
  CGC: 'R',
  CGA: 'R',
  CGG: 'R',
  AGA: 'R',
  AGG: 'R',
  AAA: 'K',
  AAG: 'K',
  AAT: 'N',
  AAC: 'N',
  ATG: 'M',
  GAT: 'D',
  GAC: 'D',
  TTT: 'F',
  TTC: 'F',
  TGT: 'C',
  TGC: 'C',
  CCT: 'P',
  CCC: 'P',
  CCA: 'P',
  CCG: 'P',
  CAA: 'Q',
  CAG: 'Q',
  TCT: 'S',
  TCC: 'S',
  TCA: 'S',
  TCG: 'S',
  AGT: 'S',
  AGC: 'S',
  GAA: 'E',
  GAG: 'E',
  ACT: 'T',
  ACC: 'T',
  ACA: 'T',
  ACG: 'T',
  GGT: 'G',
  GGC: 'G',
  GGA: 'G',
  GGG: 'G',
  TGG: 'W',
  CAT: 'H',
  CAC: 'H',
  TAT: 'Y',
  TAC: 'Y',
  ATT: 'I',
  ATC: 'I',
  ATA: 'I',
  GTT: 'V',
  GTC: 'V',
  GTA: 'V',
  GTG: 'V',
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

const translateDna = (dna, outFormat, proteinJoin) => {
  let protein = [];
  if (dna === 'Non-DNA character entered, please enter ATCG only') { return dna } else {
  if (checkForTriplets(dna) === false) {
    return 'DNA is not in triplets - please input sequence with complete triplets.' }
   else {
    // split into triplets
    const dnaArray = dnaToArray(dna);
    if (outFormat === 'threeLetter') {
    // look up codons
    for (let codon of dnaArray) {
      protein.push(codonToAATableThreeLetter[codon]);
    }}
    else {if (outFormat === 'oneLetter') 
    for (let codon of dnaArray) {
      protein.push(codonToAATableOneLetter[codon]);
    }};
  
  return protein.join(proteinJoin);}
};
}

export { dnaToArray, checkForTriplets, translateDna };
