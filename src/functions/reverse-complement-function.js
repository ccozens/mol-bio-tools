import { checkDnaInput } from './checkDnaInput';

export const reverseComplementDNA = (dna) => {
  const checkedDna = checkDnaInput(dna);
  if (checkedDna.includes('Non-DNA')) { return checkedDna}
  
  const splitDna = checkedDna.split('');
  const compDnaArray = splitDna.map((nt) => {
    return { A: 'T', T: 'A', C: 'G', G: 'C' }[nt];
  });
  const revCompArray = compDnaArray.reverse();
  const revCompDnaJoined = revCompArray.join('');
  return revCompDnaJoined;
};
