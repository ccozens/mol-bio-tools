import '@testing-library/jest-dom/extend-expect';
// import modules to test
import { reverseComplementDNA } from '../../functions/reverse-complement-function';

// tbj-tab for test block

describe('test DNA reformatting', () => {
  test('reverseComplementDNA should return uppercase complementary DNA sequence', () => {
    // setup
    const dna1 = 'AAttGgcC';
    const dna2 = 'GTGCATGCA';
    const dna3 =
      'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGTGA\nGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAG\nCTTTGGCGGCAGCTAGGGGAGGAT';

    const exp_dna1 = 'GGCCAATT';
    const exp_dna2 = 'TGCATGCAC';
    const exp_dna3 =
      'ATCCTCCCCTAGCTGCCGCCAAAGCTCCGGAAGCCCGACGCCACGACCTAGAAACACGCTGCCGCCTCGCCGCCTCGCGTGCGCTCACCCAGCCGCAGGCGCCTGAGCGGCCAGAGCCGCCACCGAACACGCCGCACCGGCCACCGCCGTTCCCTGATAGATTGCT';

    //test
    expect(reverseComplementDNA(dna1)).toBe(exp_dna1);
    expect(reverseComplementDNA(dna2)).toBe(exp_dna2);
    expect(reverseComplementDNA(dna3)).toBe(exp_dna3);
  });
});
