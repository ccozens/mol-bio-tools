export const aaCount_total = (protein) => protein.length;

export const aaCount_individual = (protein) => {
    // convert to array
    const proteinArray = Array.from(protein);
    // add if threeLetter activated convert to single letter logic
    const aaCounts = [
        {resi: 'A', count: 0},
        {resi: 'G', count: 0},
        {resi: 'I', count: 0},
        {resi: 'L', count: 0},
        {resi: 'M', count: 0},
        {resi: 'P', count: 0},
        {resi: 'V', count: 0},
        {resi: 'D', count: 0},
        {resi: 'E', count: 0},
        {resi: 'R', count: 0},
        {resi: 'H', count: 0},
        {resi: 'K', count: 0},
        {resi: 'F', count: 0},
        {resi: 'W', count: 0},
        {resi: 'Y', count: 0},
        {resi: 'S', count: 0},
        {resi: 'T', count: 0},
        {resi: 'N', count: 0},
        {resi: 'C', count: 0},
        {resi: 'Q', count: 0},
    ];

    for (let i in aaCounts)
        for (let j of proteinArray)
            if (j === aaCounts[i].resi) {
                aaCounts[i].count++
            }

      return aaCounts
}
