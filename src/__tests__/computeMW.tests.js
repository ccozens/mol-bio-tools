import '@testing-library/jest-dom/extend-expect';
// import modules to test
import { computeMW } from '../scripts/computeParameters';

// tbj-tab for test block

test('single AAs should return correct MW', () => {
    //setup 
    const A = 71.037113805;
    const W = 186.079313;
    const S = 87.032028;
    const water = 18.0107946;

    //test
    expect(computeMW('AA').protMW).toBeCloseTo(A + A + water);
    expect(computeMW('WW').protMW).toBeCloseTo(W + W+ water);
    expect(computeMW('SS').protMW).toBeCloseTo(S + S + water);
});

test('MW should be correct for complex protein', () => {
    const pdb7X39 = 'GHMSHTILLVQPTKRPEGRTYADYESVNECMEGVCKMYEEHLKRMNPNSPSITYDISQLFDFIDDLADLSCLVYRADTQTYQPYNKDWIKEKIYVLLRRQAQQAGKGSSGSSGSSGSSGSSGSSGSSPGVWGAGGSLKVTILQSSDSRAFSTVPLTPV';

    expect(computeMW(pdb7X39).protMW).toBeCloseTo(17171.34);
});