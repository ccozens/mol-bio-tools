export const convertThreeToOneLetter = (protein) => {
  const aaLookupTable = {
    Ala: 'A',
    Arg: 'R',
    Asn: ' N',
    Asp: 'D',
    Cys: 'C',
    Glu: 'E',
    Gln: 'Q',
    Gly: 'G',
    His: 'H',
    Ile: 'I',
    Leu: 'L',
    Lys: 'K',
    Met: 'M',
    Phe: 'F',
    Pro: 'P',
    Ser: 'S',
    Thr: 'T',
    Trp: 'W',
    Tyr: 'Y',
    Val: 'V',
  };

  // create proteinArray in three letter slices
  let proteinArray = [];
  for (let i = 0; i < protein.length; i += 3) {
    proteinArray.push(protein.substring(i, i + 3));
  }

  const oneLetterArr = [];
  proteinArray.map((pos) => {
    return oneLetterArr.push(aaLookupTable[pos]);
  });
  const oneLetterStr = oneLetterArr.join('');
  return oneLetterStr;
};
