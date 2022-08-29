export const reverseComplementDNA = (dna) => {
  if (dna === 'Non-DNA character entered, please enter ATCG only') { return dna } else { const splitDna = dna.split("");
  const compDnaArray = splitDna.map((nt) => {
    return { A: "T", T: "A", C: "G", G: "C" }[nt];
  });
  const revCompArray = compDnaArray.reverse();
  const revCompDnaJoined = revCompArray.join("");
  return revCompDnaJoined;}
};