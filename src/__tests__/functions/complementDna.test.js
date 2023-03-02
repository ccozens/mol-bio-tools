import '@testing-library/jest-dom/extend-expect';
// import modules to test
import { complementDNA } from '../../functions/complementDNA';

// tbj-tab for test block

describe('test DNA reformatting', () => {


test('complementDNA should return uppercase complementary DNA sequence', () => {
  // setup
  const dna1 = 'AAttGgcC';
  const dna2 = 'GTGCATGCA';
  const dna3 =
    'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGTGA\nGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAG\nCTTTGGCGGCAGCTAGGGGAGGAT';

  const exp_dna1 = 'TTAACCGG';
  const exp_dna2 = 'CACGTACGT';
  const exp_dna3 =
    'TCGTTAGATAGTCCCTTGCCGCCACCGGCCACGCCGCACAAGCCACCGCCGAGACCGGCGAGTCCGCGGACGCCGACCCACTCGCGTGCGCTCCGCCGCTCCGCCGTCGCACAAAGATCCAGCACCGCAGCCCGAAGGCCTCGAAACCGCCGTCGATCCCCTCCTA';

  //test
  expect(complementDNA(dna1)).toBe(exp_dna1);
  expect(complementDNA(dna2)).toBe(exp_dna2);
  expect(complementDNA(dna3)).toBe(exp_dna3);
});

});
