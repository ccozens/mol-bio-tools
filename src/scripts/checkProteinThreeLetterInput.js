export const checkProteinThreeLetterInput = (input) => {

  if (input === '') {
    return '';
  } else {
    //remove any line breaks
    const protein = input.replace(/[\r\n]/gm, '');
    // convert to three letter array and check for non-AA content
  let proteinArray = [];
  for (let i = 0; i < protein.length; i += 3) {
    proteinArray.push(protein.substring(i, i + 3));
  }
 
    const allThreeLetter = ['Ala', 'Arg', 'Asn', 'Asp', 'Cys', 'Glu', 'Gln', 'Gly', 'His', 'Ile', 'Leu', 'Lys', 'Met', 'Phe', 'Pro', 'Ser', 'Thr', 'Trp', 'Tyr', 'Val']
    const wrongInput = proteinArray.filter((resi) => !allThreeLetter.includes(resi));
    let wrongInputPositions = [];
      for (let i in wrongInput) { wrongInputPositions.push(proteinArray.indexOf((wrongInput[i]))+1) };

    const errorMessage = `Non-amino acid character entered, please enter only 20 natural residues in three letter format.  Non-protein characters at positions: ${wrongInputPositions.join(', ')}`;
  
    // return unchanged proteinInput if for loop exits successfully
    return wrongInput.length > 0 ? errorMessage : protein;
  }
};

