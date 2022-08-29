export const transcribe = (dna) => {
  return dna === 'Non-DNA character entered, please enter ATCG only'
    ? dna
    : dna.replaceAll('T', 'U');
};

