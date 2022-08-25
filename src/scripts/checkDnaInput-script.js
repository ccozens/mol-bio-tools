export const checkInput = (dna) => {
  // ensure input uppercase
  const dnaUpper = dna.toUpperCase();
  // convert to array
  const dnaUpperArray = Array.from(dnaUpper);
  // check array is entirely composed of ACTG
  for (let nt of dnaUpperArray) {
    if (nt.match(/[^ACGT]/)) 
      return('Non-DNA character entered, please enter ATCG only');
    }
    // return dnaUpper if for loop exits successfully 
      return dnaUpper;
};