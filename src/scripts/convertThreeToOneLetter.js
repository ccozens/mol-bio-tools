export const convertThreeToOneLetter = (protein) => {
  const aaLookupTable = {
    Ala: 'A',
    Arg: 'R',
    Asn: 'N',
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

    // strip spacers and remove * from C-term if present
    const proteinStarRemoved =
    protein.at(-1) === '*'
    ? protein.replace(/[- .]/g, '').slice(0, -1)
    : protein.replace(/[- .]/g, '');
    
    // create proteinArray in three character slices
  let proteinArray = [];
  for (let i = 0; i < proteinStarRemoved.length; i += 3) {
    proteinArray.push(proteinStarRemoved.substring(i, i + 3));
  }

  const oneLetterArr = [];
  proteinArray.map((pos) => {
    return oneLetterArr.push(aaLookupTable[pos]);
  });
  const oneLetterStr = oneLetterArr.join('');
  return oneLetterStr;
};
