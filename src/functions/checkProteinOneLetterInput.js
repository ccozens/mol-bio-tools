const naturalAminoAcidsRegex = new RegExp(/[^ARNDCEQGHILKMFPSTWYV]/gi);

// find locations of non-protein input characters
const findMatches = (proteinInput) => {
  const matches = proteinInput.matchAll(naturalAminoAcidsRegex);
  const indexes = [];
  for (const match of matches) {
    indexes.push(match.index + 1);
  }
  return indexes.join(', ');
};

export const checkProteinOneLetterInput = (proteinInput) => {
  // ensure uppercase
  const proteinUpper = proteinInput.toUpperCase();
  //remove any line breaks
  const protein = proteinUpper.replace(/[\r\n]/gm, '');
  
  if (protein === '') {
    return '';
  } else {
    // if protein is in single letter format, create array and check for non-natural AA input
    let proteinArray = [];
    // convert to array
    proteinArray = Array.from(protein);
    // check array is entirely composed of natural AAs (ARNDCEQGHILKMFPSTWYV)
    for (let resi of proteinArray) {
      if (resi.match(naturalAminoAcidsRegex))
        return (
          `Non-amino acid character entered, please enter only 20 natural residues.  Non-protein characters at positions: ${findMatches(proteinInput)}`) 
    }

    // return uppercase proteinInput if for loop exits successfully
    return protein;
  }
  
};
