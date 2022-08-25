const dna1 = 'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGTGAGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAGCTTTGGCGGCAGCTAGGGGAGGATGGCGGAGTCTTCGGATAAGCTCTATCGAGTCGAGTACGCCAAGAGCGGGCGCGCCTCTTGCAAGAAATGCAGCGAGAGCATCCCCAAGGACTCGCTCCGGATGGCCATCATGGTGCAGGTGCGGGCCGCTGTGCGGGCGGCGGGGCGGGGACGCGGCGCCCCGGGTTAACTGTGTCCGGGAAGGCTGGGGGAGGGCGGGCCCAGGGAGCGAGCGGGCCCGGGCCCTCGGAGCGGCACTTGGGGCCTATGGGGCCGCGGCCGCCCCTCCTCCCGAGCGGCCCGGCCGACCCTTCCGGAAGGTTTTGCTGATGTTGCAGGAAAAGCCCGGGAAATAAAGTCTGCAGCTGGTGTTGCCTTTCGCTTTGTGAAAACGAGGAGCCTCTTCTCTTCTCCTTTCTGGGTGGCGGTGTTTTATTACTGCCGTTCGCCTCAGGGGTTGGGGGGGAATTGTACATGGTCTCTTTAAGCTAATCTGATTTTGACCTATCTTGTTCTGGAGGGTTTTTGTTCTACATGGATGGTGGCGACTGACATGTGGGTTTTTTTTTTTTTTGTTAAACCTATTTTTGGCAGTCATTTCAACACGTCATTTAAACGCTCACTCTCATTTTTTATTTTAATTAGGCAGAACTATGCAGAAAGGTGTCATTTCTGTACAGTACATTCACTTTGAGCCTAATTTGTGCTTTAAAGTAACATTTTCCCCAAATTTTCCAGATTCACAGACGCGTTCTCTTGGTGCATTTGCAGCTGTCTGGTTTGAGTAAGAGTGGCTCCAGGGGGGTTTCTCATGTGGGCTTTTTGATAGATTGAATCCCCTTCTGAGGTTTCCTGAGCCTTCTGTGAGGTGGTGGGCTTGAAGGCCCCTGTCATTTCCCAGGGGCTCCTGCCTCCAGCTTCCAGTTTGCCGATGTCTACCTTTGTATTAATAATTCTGGTTCTCATCTGCCCTGTTCCTCCTCGCTTCCAACATATTACCCAAGCTTAGTGCTCATGGTCAAGGTAGCTTGATTTTCCTCCCTTCCATGAGCTGTAATGTGTTTTAGGAATGACCAGATATCCCTCAGTGGATTTTCAGTACTTAGTACAAGGGAGGGCGACATTTACCGAGTGGATACCCAAGTGCCAGGTGTACTTCCGTTATCTTATTTCACAATATGCCTGTCATCTTGGTGTCCTCGGGGCATACCTAAGTCAGTACGTGGCACACAGTGCTTATTTGGTAGGCATTTTTTAAGTTCTAAGCACTCTGTTAGGTTTTAAGGACACAGAATCCACCTTTGGGAATTTCCAGTTTGGTTAAACGGGAAATGACTGGTAAACAAACGTTACCGTAAGAGAGGATGGATGCCACCTGATGGAGCTGTGCTCTAG';


const getCountedNucleotides = dna => {
    // time 
    const t0 = performance.now();
    // create empty object
    let ntCounts = {'A': 0, 'C': 0, 'G': 0, 'T': 0};
    // ensure input uppercase
    const dnaUpper = dna.toUpperCase();
    // convert to array
    const dnaUpperArray = Array.from(dnaUpper);
    // count items in array
    for (let nt of dnaUpperArray) {if (nt === 'A') ntCounts.A ++};
    for (let nt of dnaUpperArray) {if (nt === 'C') ntCounts.C ++};
    for (let nt of dnaUpperArray) {if (nt === 'G') ntCounts.G ++};
    for (let nt of dnaUpperArray) {if (nt === 'T') ntCounts.T ++};
    const t1 = performance.now()
    return `counts: ${JSON.stringify(ntCounts)} \n\
    Time for 4 for...if loops was ${t1-t0}`;

}

const getCountedNucleotides2 = dna => {
    // time 
    const t0 = performance.now();
    // create empty object
    let ntCounts = {'A': 0, 'C': 0, 'G': 0, 'T': 0};
    // ensure input uppercase
    const dnaUpper = dna.toUpperCase();
    // convert to array
    const dnaUpperArray = Array.from(dnaUpper);
    // count items in array
    for (let nt of dnaUpperArray) 
        {if (nt === 'A') {ntCounts.A ++}
            else {if (nt === 'C') {ntCounts.C ++}
                else {if (nt === 'G') {ntCounts.G ++}
                    else {if (nt === 'T') {ntCounts.T ++}
        }}}}
    const t1 = performance.now()
    return `counts: ${JSON.stringify(ntCounts)} \n\
    Time for 1 if...else loops was ${t1-t0}`;

}

const getCountedNucleotides3 = dna => {
    // time 
    const t0 = performance.now();
    
    // ensure input uppercase
    const dnaUpper = dna.toUpperCase();
    // convert to array
    const dnaUpperArray = Array.from(dnaUpper);
    // count items in array
    const ntCounts = dnaUpperArray.reduce((allNt, nt) => {
        allNt[nt] ??= 0;
        allNt[nt] ++;
        return allNt;
    })

    const t1 = performance.now()
    return `counts: ${JSON.stringify(ntCounts)} \n\
    Time for reduce was ${t1-t0}`;

}

const getCountedNucleotides4 = dna => {
    // time 
    const t0 = performance.now();
    // ensure input uppercase
    const dnaUpper = dna.toUpperCase();
    // create empty array
    let ntCounts = {'A': 0, 'C': 0, 'G': 0, 'T': 0};
    // count items in string
    for (let i = 0; i < dnaUpper.length; i++) {
        ntCounts[dnaUpper[i]]++;
    }

    const t1 = performance.now()
    return `counts: ${JSON.stringify(ntCounts)} \n\
    Time for different for loop through string was ${t1-t0}`;

}

const getCountedNucleotides5 = dna => {
    // time 
    const t0 = performance.now();
    // ensure input uppercase
    const dnaUpper = dna.toUpperCase();
    // create empty array
    let ntCounts = {'A': 0, 'C': 0, 'G': 0, 'T': 0};
    // count items in string
    // count items in array
    for (let nt of dnaUpper) 
        {if (nt === 'A') {ntCounts.A ++}
            else {if (nt === 'C') {ntCounts.C ++}
                else {if (nt === 'G') {ntCounts.G ++}
                    else {if (nt === 'T') {ntCounts.T ++}
        }}}}

    const t1 = performance.now()
    return `counts: ${JSON.stringify(ntCounts)} \n\
    Time for v2 and 4 combined  was ${t1-t0}`;

}

const getCountedNucleotides6 = dna => {
    const t0 = performance.now();
    const ntCounts =  {A:[...dna].filter(e=>e==='A'||e==='a').length,
            C:[...dna].filter(e=>e==='C'||e==='c').length,
            G:[...dna].filter(e=>e==='G'||e==='g').length,
            T:[...dna].filter(e=>e==='T'||e==='t').length
            }
    const t1 = performance.now()
    return `counts: ${JSON.stringify(ntCounts)} \n\
    Time for filter/spread/1pot combined was ${t1-t0}`;
   }


console.log(getCountedNucleotides(dna1)); // return {A: 3, C: 2, G: 2, T: 1}
console.log(getCountedNucleotides2(dna1)); // return {A: 3, C: 2, G: 2, T: 1}
console.log(getCountedNucleotides3(dna1)); // return {A: 3, C: 2, G: 2, T: 1}
console.log(getCountedNucleotides4(dna1)); // return {A: 3, C: 2, G: 2, T: 1}
console.log(getCountedNucleotides5(dna1)); // return {A: 3, C: 2, G: 2, T: 1}
console.log(getCountedNucleotides6(dna1)); // return {A: 3, C: 2, G: 2, T: 1}


