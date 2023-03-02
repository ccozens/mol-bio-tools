import { aaThreeOneLetterNames } from './lookupTables'

export const convertThreeToOneLetter = (protein) => {


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
    return oneLetterArr.push(aaThreeOneLetterNames[pos]);
  });
  const oneLetterStr = oneLetterArr.join('');
  return oneLetterStr;
};
