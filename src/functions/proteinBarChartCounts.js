export const countAAsOneLetter = (protein) => {
    // empty data
    let aaCountsSingleLetter = [
        { resi: 'A', count: 0 },
        { resi: 'G', count: 0 },
        { resi: 'I', count: 0 },
        { resi: 'L', count: 0 },
        { resi: 'M', count: 0 },
        { resi: 'P', count: 0 },
        { resi: 'V', count: 0 },
        { resi: 'D', count: 0 },
        { resi: 'E', count: 0 },
        { resi: 'R', count: 0 },
        { resi: 'H', count: 0 },
        { resi: 'K', count: 0 },
        { resi: 'F', count: 0 },
        { resi: 'W', count: 0 },
        { resi: 'Y', count: 0 },
        { resi: 'S', count: 0 },
        { resi: 'T', count: 0 },
        { resi: 'N', count: 0 },
        { resi: 'C', count: 0 },
        { resi: 'Q', count: 0 },
      ];
  // strip spacer
  const spacerOptionsRegex = /[-. ]/g;
  protein = protein.replaceAll(spacerOptionsRegex, '');
  
  // convert to array
  const proteinArray = Array.from(protein);
  // count AAs in sequence
  for (let i in aaCountsSingleLetter)
    for (let j of proteinArray)
      if (j === aaCountsSingleLetter[i].resi) {
        aaCountsSingleLetter[i].count++;
      }
  // calc ratios
  aaCountsSingleLetter.forEach((pos) => {pos.count = (pos.count/proteinArray.length).toFixed(2)})

  return aaCountsSingleLetter;
};


export const countAAsThreeLetter = (protein) => {
    // empty data
    let aaCountsThreeLetter = [
        { resi: 'Ala', count: 0 },
        { resi: 'Gly', count: 0 },
        { resi: 'Ile', count: 0 },
        { resi: 'Leu', count: 0 },
        { resi: 'Met', count: 0 },
        { resi: 'Pro', count: 0 },
        { resi: 'Val', count: 0 },
        { resi: 'Asp', count: 0 },
        { resi: 'Glu', count: 0 },
        { resi: 'Arg', count: 0 },
        { resi: 'His', count: 0 },
        { resi: 'Lys', count: 0 },
        { resi: 'Phe', count: 0 },
        { resi: 'Trp', count: 0 },
        { resi: 'Tyr', count: 0 },
        { resi: 'Ser', count: 0 },
        { resi: 'Thr', count: 0 },
        { resi: 'Asn', count: 0 },
        { resi: 'Cys', count: 0 },
        { resi: 'Gln', count: 0 },
      ];
    // strip spacer
  const spacerOptionsRegex = /[-. ]/g;
  protein = protein.replaceAll(spacerOptionsRegex, '');

    // create proteinArray in three letter slices
    let proteinArray = [];
    for (let i = 0; i < protein.length; i += 3) {
      proteinArray.push(protein.substring(i, i + 3));
    }

  // populate aaCountsThreeLetter
  for (let i in aaCountsThreeLetter)
    for (let j of proteinArray)
      if (j === aaCountsThreeLetter[i].resi) {
        aaCountsThreeLetter[i].count++;
      }

      aaCountsThreeLetter.forEach((pos) => {pos.count = (pos.count/proteinArray.length).toFixed(2)});

  return aaCountsThreeLetter;
};

