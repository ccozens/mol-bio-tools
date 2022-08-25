export const reverseComplementDNA = (dna) => {
  const splitDna = dna.split("");
  const compDnaArray = splitDna.map((nt) => {
    return { A: "T", T: "A", C: "G", G: "C" }[nt];
  });
  const revCompArray = compDnaArray.reverse();
  const revCompDnaJoined = revCompArray.join("");
  return revCompDnaJoined;
};

export const checkDNA = (seq1, seq2) => {
  const seq1RevComp = reverseComplementDNA(seq1);
  if (!seq1 || !seq2) {
    return false;
  }
  if (seq1RevComp.length < seq2.length) {
    return seq2.includes(seq1RevComp);
  } else {
    return seq1RevComp.includes(seq2);
  }
};
