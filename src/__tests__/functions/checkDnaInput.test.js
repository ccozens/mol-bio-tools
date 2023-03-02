import '@testing-library/jest-dom/extend-expect';
// import modules to test
import { checkDnaInput } from '../../functions/checkDnaInput';

// tbj-tab for test block

describe('test DNA reformatting', () => {
test('checkDnaInput should throw an error if any characters other than ACGT present', () => {
  //setup
  const dnaError1 = 'NNN';
  const dnaError2 = 'TAAAAAAA7AAATAAAAAAAAAA';
  const dnaError3 = 'xyz';
  //expected
  
  //test
  expect(checkDnaInput(dnaError1)).toContain(
    'Non-DNA character entered, please enter ATCG only.'
    );
    expect(checkDnaInput(dnaError2)).toContain(
      'Non-DNA character entered, please enter ATCG only.'
      );
      expect(checkDnaInput(dnaError3)).toContain(
        'Non-DNA character entered, please enter ATCG only.'
        );
      });

test('checkDnaInput should return exact input if no error', () => {
  //setup
  const dna1 = 'AATTGGCC';
  const dna2 = 'CACGTACGT';
  const dna3 =
    'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGTGAGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAGCTTTGGCGGCAGCTAGGGGAGGAT';
  const dna4 = 'TAAAAAAAAAATAAAAAAAAAA';

  //test
  expect(checkDnaInput(dna1)).toBe(dna1);
  expect(checkDnaInput(dna2)).toBe(dna2);
  expect(checkDnaInput(dna3)).toBe(dna3);
  expect(checkDnaInput(dna4)).toBe(dna4);
});

test('checkDnaInput should format to non-gapped uppercase', () => {
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
  expect(checkDnaInput(dna1)).toBe(exp_dna1);
  expect(checkDnaInput(dna2)).toBe(exp_dna2);
  expect(checkDnaInput(dna3)).toBe(exp_dna3);
});

});
