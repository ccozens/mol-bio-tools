export const TrypticDigest = (protein) => {

    const proteinArray = Array.from(protein);
    // cleave where K or R are present, except where either is adjacent to P
    let trypsinSites = [0];
    let trypsinFragments = [];

    // list out K + R sites, adding 1 to index as trypsin cuts after K/R
    proteinArray.forEach((pos, idx) => {if ((proteinArray[idx+1] !== 'P' && pos === 'K') || (proteinArray[idx+1] !== 'P' && pos === 'R')) {trypsinSites.push(idx+1)}});
    // make cuts and store fragments
    trypsinSites.forEach((pos, idx) => trypsinFragments.push(protein.slice(pos, trypsinSites[idx+1])));

    return trypsinFragments
};

