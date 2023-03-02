import '@testing-library/jest-dom/extend-expect';
// import modules to test
import { countAAsOneLetter, countAAsThreeLetter } from '../../functions/proteinBarChartCounts'

// tbj-tab for test block


test('countAAsOneLetter should return number of AAs', () => {
    //setup 
    const protOne = 'KAYERN';
    const protTwo = 'MKKKKKKSLRSLQFQFLFHSVSQTPTHHSLENGKKKQKKNKKMYNGCIEIICNCINGATVIKLNN'
    //expected 
    const countOne = [
        { resi: 'A', count: 0.16666666666666666 },
        { resi: 'G', count: 0 },
        { resi: 'I', count: 0 },
        { resi: 'L', count: 0 },
        { resi: 'M', count: 0 },
        { resi: 'P', count: 0 },
        { resi: 'V', count: 0 },
        { resi: 'D', count: 0 },
        { resi: 'E', count: 0.16666666666666666 },
        { resi: 'R', count: 0.16666666666666666 },
        { resi: 'H', count: 0 },
        { resi: 'K', count: 0.16666666666666666 },
        { resi: 'F', count: 0 },
        { resi: 'W', count: 0 },
        { resi: 'Y', count: 0.16666666666666666 },
        { resi: 'S', count: 0 },
        { resi: 'T', count: 0 },
        { resi: 'N', count: 0.16666666666666666 },
        { resi: 'C', count: 0 },
        { resi: 'Q', count: 0 }
      ];
    const countTwo = [
        { resi: 'A', count: 0.015384615384615385 },
        { resi: 'G', count: 0.046153846153846156 },
        { resi: 'I', count: 0.07692307692307693 },
        { resi: 'L', count: 0.07692307692307693 },
        { resi: 'M', count: 0.03076923076923077 },
        { resi: 'P', count: 0.015384615384615385 },
        { resi: 'V', count: 0.03076923076923077 },
        { resi: 'D', count: 0 },
        { resi: 'E', count: 0.03076923076923077 },
        { resi: 'R', count: 0.015384615384615385 },
        { resi: 'H', count: 0.046153846153846156 },
        { resi: 'K', count: 0.2153846153846154 },
        { resi: 'F', count: 0.046153846153846156 },
        { resi: 'W', count: 0 },
        { resi: 'Y', count: 0.015384615384615385 },
        { resi: 'S', count: 0.07692307692307693 },
        { resi: 'T', count: 0.046153846153846156 },
        { resi: 'N', count: 0.1076923076923077 },
        { resi: 'C', count: 0.046153846153846156 },
        { resi: 'Q', count: 0.06153846153846154 }
      ];

      const countOneRounded = [];
      countOne.map((item) => (countOneRounded.push({resi: item.resi, count: item.count.toFixed(2)})))
      const countTwoRounded = [];
      countTwo.map((item) => (countTwoRounded.push({resi: item.resi, count: item.count.toFixed(2)})))
    
    
    //test
    expect(countAAsOneLetter(protOne)).toEqual(countOneRounded);
    expect(countAAsOneLetter(protTwo)).toEqual(countTwoRounded);
});

test('countAAsThreeLetter should return ratio of AAs at each position', () => {
    //setup 
    const protOne = 'KAYERN';
    const protTwo = 'MKKKKKKSLRSLQFQFLFHSVSQTPTHHSLENGKKKQKKNKKMYNGCIEIICNCINGATVIKLNN'
    //expected 
    const countOne = [
        { resi: 'Ala', count: 0 },
        { resi: 'Gly', count: 0 },
        { resi: 'Ile', count: 0 },
        { resi: 'Leu', count: 0 },
        { resi: 'Met', count: 0 },
        { resi: 'Pro', count: 0 },
        { resi: 'Val', count: 0 },
        { resi: 'Asp', count: 0 },
        { resi: 'Glu', count: 0 },
        { resi: 'Arg', count: 0 },
        { resi: 'His', count: 0 },
        { resi: 'Lys', count: 0 },
        { resi: 'Phe', count: 0 },
        { resi: 'Trp', count: 0 },
        { resi: 'Tyr', count: 0 },
        { resi: 'Ser', count: 0 },
        { resi: 'Thr', count: 0 },
        { resi: 'Asn', count: 0 },
        { resi: 'Cys', count: 0 },
        { resi: 'Gln', count: 0 }
      ];
    const countTwo = [
        { resi: 'Ala', count: 0 },
        { resi: 'Gly', count: 0 },
        { resi: 'Ile', count: 0 },
        { resi: 'Leu', count: 0 },
        { resi: 'Met', count: 0 },
        { resi: 'Pro', count: 0 },
        { resi: 'Val', count: 0 },
        { resi: 'Asp', count: 0 },
        { resi: 'Glu', count: 0 },
        { resi: 'Arg', count: 0 },
        { resi: 'His', count: 0 },
        { resi: 'Lys', count: 0 },
        { resi: 'Phe', count: 0 },
        { resi: 'Trp', count: 0 },
        { resi: 'Tyr', count: 0 },
        { resi: 'Ser', count: 0 },
        { resi: 'Thr', count: 0 },
        { resi: 'Asn', count: 0 },
        { resi: 'Cys', count: 0 },
        { resi: 'Gln', count: 0 }
      ];
    
      const countOneRounded = [];
      countOne.map((item) => (countOneRounded.push({resi: item.resi, count: item.count.toFixed(2)})))
      const countTwoRounded = [];
      countTwo.map((item) => (countTwoRounded.push({resi: item.resi, count: item.count.toFixed(2)})))

    //test
    expect(countAAsThreeLetter(protOne)).toEqual(countOneRounded);
    expect(countAAsThreeLetter(protTwo)).toEqual(countTwoRounded);
});