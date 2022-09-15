// find locations of non-proteinInput characters
const findMatches = (proteinInput) => {
  const matches = proteinInput.matchAll(/[^ARNDCEQGHILKMFPSTWYV]/gi);
  const indexes = [];
  for (const match of matches) {
    indexes.push(match.index + 1);
  }
  return indexes.join(', ');
};

export const checkProteinOneLetterInput = (proteinInput) => {

  if (proteinInput === '') {
    return '';
  } else {
    //remove any line breaks
    const protein = proteinInput.replace(/[\r\n]/gm, '');
    // if protein is in single letter format, create array and check for non-natural AA input
    let proteinArray = [];
    // convert to array
    proteinArray = Array.from(protein);
    // check array is entirely composed of natural AAs (ARNDCEQGHILKMFPSTWYV)
    for (let resi of proteinArray) {
      if (resi.match(/[^ARNDCEQGHILKMFPSTWYV]/))
        return (
          `Non-amino acid character entered, please enter only 20 natural residues.  Non-protein characters at positions: ${findMatches(proteinInput)}`) 
    }

    // return unchanged proteinInput if for loop exits successfully
    return protein;
  }
  
};
