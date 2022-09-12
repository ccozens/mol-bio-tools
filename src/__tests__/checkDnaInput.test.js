import '@testing-library/jest-dom/extend-expect';
// import modules to test
import { checkInput } from '../scripts/checkDnaInput-script';

// tbj-tab for test block

describe('test DNA reformatting', () => {
test('checkInput should throw an error if any characters other than ACGT present', () => {
  //setup
  const dnaError1 = 'NNN';
  const dnaError2 = 'TAAAAAAA7AAATAAAAAAAAAA';
  const dnaError3 = 'xyz';
  //expected

  //test
  expect(checkInput(dnaError1)).toContain(
    'Non-DNA character entered, please enter ATCG only.'
  );
  expect(checkInput(dnaError2)).toContain(
    'Non-DNA character entered, please enter ATCG only.'
  );
  expect(checkInput(dnaError3)).toContain(
    'Non-DNA character entered, please enter ATCG only.'
  );
});

test('checkInput should return exact input if no error', () => {
  //setup
  const dna1 = 'AATTGGCC';
  const dna2 = 'CACGTACGT';
  const dna3 =
    'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGTGAGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAGCTTTGGCGGCAGCTAGGGGAGGAT';
  const dna4 = 'TAAAAAAAAAATAAAAAAAAAA';

  //test
  expect(checkInput(dna1)).toBe(dna1);
  expect(checkInput(dna2)).toBe(dna2);
  expect(checkInput(dna3)).toBe(dna3);
  expect(checkInput(dna4)).toBe(dna4);
});

test('checkInput should format to non-gapped uppercase', () => {
  // setup
  const dna1 = 'AAttGgcC';
  const dna2 = 'cacgtacgt';
  const dna3 =
    'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGTGA\nGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAG\nCTTTGGCGGCAGCTAGGGGAGGAT';

  const exp_dna1 = 'AATTGGCC';
  const exp_dna2 = 'CACGTACGT';
  const exp_dna3 =
    'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGTGAGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAGCTTTGGCGGCAGCTAGGGGAGGAT';

  //test
  expect(checkInput(dna1)).toBe(exp_dna1);
  expect(checkInput(dna2)).toBe(exp_dna2);
  expect(checkInput(dna3)).toBe(exp_dna3);
});

});
