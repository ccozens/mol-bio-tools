import '@testing-library/jest-dom/extend-expect';
// import modules to test
import { aaCount_total, aaCount_individual } from '../scripts/chartSeq'

// tbj-tab for test block

test('aaCount-total should return number of AAs', () => {
    //setup 
    const protOne = 'KAYERN';
    const protTwo = 'DVLITYNGDNFDFAYLKKRS'
    //expected 
    const countOne = 6;
    const countTwo = 20;
    
    //test
    expect(aaCount_total(protOne)).toEqual(countOne);
    expect(aaCount_total(protTwo)).toEqual(countTwo);
});

test('aaCount-total should return number of AAs', () => {
    //setup 
    const protOne = 'KAYERN';
    const protTwo = 'MKKKKKKSLRSLQFQFLFHSVSQTPTHHSLENGKKKQKKNKKMYNGCIEIICNCINGATVIKLNN'
    //expected 
    const countOne = [
        {resi: 'A', count: 1},
        {resi: 'G', count: 0},
        {resi: 'I', count: 0},
        {resi: 'L', count: 0},
        {resi: 'M', count: 0},
        {resi: 'P', count: 0},
        {resi: 'V', count: 0},
        {resi: 'D', count: 0},
        {resi: 'E', count: 1},
        {resi: 'R', count: 1},
        {resi: 'H', count: 0},
        {resi: 'K', count: 1},
        {resi: 'F', count: 0},
        {resi: 'W', count: 0},
        {resi: 'Y', count: 1},
        {resi: 'S', count: 0},
        {resi: 'T', count: 0},
        {resi: 'N', count: 1},
        {resi: 'C', count: 0},
        {resi: 'Q', count: 0},
    ];
    const countTwo = [
        {resi: 'A', count: 1},
        {resi: 'G', count: 3},
        {resi: 'I', count: 5},
        {resi: 'L', count: 5},
        {resi: 'M', count: 2},
        {resi: 'P', count: 1},
        {resi: 'V', count: 2},
        {resi: 'D', count: 0},
        {resi: 'E', count: 2},
        {resi: 'R', count: 1},
        {resi: 'H', count: 3},
        {resi: 'K', count: 14},
        {resi: 'F', count: 3},
        {resi: 'W', count: 0},
        {resi: 'Y', count: 1},
        {resi: 'S', count: 5},
        {resi: 'T', count: 3},
        {resi: 'N', count: 7},
        {resi: 'C', count: 3},
        {resi: 'Q', count: 4},
    ];
    
    
    //test
    expect(aaCount_individual(protOne)).toEqual(countOne);
    expect(aaCount_individual(protTwo)).toEqual(countTwo);
});
