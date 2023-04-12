import { describe, test } from 'vitest';
import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ResizeObserver from '../../__mocks__/resizeObserver';  // needed to prevent ResizeObserver error
// import modules to test
import { Translate } from '../../components/translate';
import { computeProteinMW } from '../../functions/computeProteinMW';
import { TrypticDigest } from '../../functions/trypticDigest';

describe('translate functionality', () => {  
  test('correct default text shown', () => {
    render(<Translate />);
    const txInput = screen.getByRole('textbox', {
      name: 'DNA input form for translate',
    });
    // should display default state 
    const tgo = 'ATGATCCTCGATACAGACTACATAACTGAGGATGGAAAGCCCGTCATCAGGATCTTCAAGAAGGAGAACGGCGAGTTCAAAATAGACTACGACAGAAACTTTGAGCCATACATCTACGCGCTCTTGAAGGACGACTCTGCGATTGAGGACGTCAAGAAGATAACTGCCGAGAGGCACGGCACTACCGTTAGGGTTGTCAGGGCCGAGAAAGTGAAGAAGAAGTTCCTAGGCAGGCCGATAGAGGTCTGGAAGCTCTACTTCACTCACCCCCAGGACGTTCCCGCAATCAGGGACAAGATAAAGGAGCATCCTGCCGTTGTGGACATCTACGAGTACGACATCCCCTTCGCGAAGCGCTACCTCATAGACAAAGGCTTAATCCCGATGGAGGGCGACGAGGAACTTAAGATGCTCGCCTTCGACATCGAGACGCTCTATCACGAGGGCGAGGAGTTCGCCGAAGGGCCTATCCTGATGATAAGCTACGCCGACGAGGAAGGGGCGCGCGTTATTACCTGGAAGAATATCGACCTTCCCTATGTCGACGTCGTTTCCACCGAGAAGGAGATGAT';
    expect(txInput).toHaveTextContent(tgo);
  });


   test('correct output generated', async () => {
    // setup
    render(<Translate />);
    const user = userEvent.setup();
    const txInput = screen.getByRole('textbox', {
      name: 'DNA input form for translate',
    });
    const output = screen.getByLabelText("Protein output");
    // click to select
    await user.click(txInput);
    // expect output box to contain correct output when type in input box
    user.keyboard('ATG');
    const protein = ('Met');
    await waitFor(() => {
      expect(output).toHaveTextContent(protein);
    })
   
      }); 

       test('error if DNA not in triplets', async () => {
        // setup
        render(<Translate />);
        const txInput = screen.getByRole('textbox', {
          name: 'DNA input form for translate',
        });
        const user = userEvent.setup();
        const outputBox = screen.getByLabelText('Protein output');
        await user.click(txInput);
        await user.keyboard('at');
        const error = 'DNA is not in triplets - please input sequence with complete triplets.';
        await waitFor(() => {
          expect(outputBox).toHaveTextContent(error);
        });
      }); 

   test('error if incorrect nt entered', async () => {
    // setup
    render(<Translate />);
    const user = userEvent.setup();
    const txInput = screen.getByRole('textbox', {
      name: 'DNA input form for translate',
    });
    const outputBox = screen.getByLabelText('Protein output');

    await user.click(txInput);
    await user.keyboard('AGH');
    const error = 'Non-DNA character entered, please enter ATCG only. Non-DNA characters at positions: 3';
    await waitFor(() => {
      expect(outputBox).toHaveTextContent(error);
    })
  }); 



   test('clicking one/three letter selector flicks button', async () => {
    //setup 
    render(<Translate />); 
    const user = userEvent.setup();
    const threeLetter = 'MetIleLeuAspThrAspTyrIleThrGluAspGlyLysProValIleArgIlePheLysLysGluAsnGlyGluPheLysIleAspTyrAspArgAsnPheGluProTyrIleTyrAlaLeuLeuLysAspAspSerAlaIleGluAspValLysLysIleThrAlaGluArgHisGlyThrThrValArgValValArgAlaGluLysValLysLysLysPheLeuGlyArgProIleGluValTrpLysLeuTyrPheThrHisProGlnAspValProAlaIleArgAspLysIleLysGluHisProAlaValValAspIleTyrGluTyrAspIleProPheAlaLysArgTyrLeuIleAspLysGlyLeuIleProMetGluGlyAspGluGluLeuLysMetLeuAlaPheAspIleGluThrLeuTyrHisGluGlyGluGluPheAlaGluGlyProIleLeuMetIleSerTyrAlaAspGluGluGlyAlaArgValIleThrTrpLysAsnIleAspLeuProTyrValAspValValSerThrGluLysGluMetIle';

    const oneLetter = 'MILDTDYITEDGKPVIRIFKKENGEFKIDYDRNFEPYIYALLKDDSAIEDVKKITAERHGTTVRVVRAEKVKKKFLGRPIEVWKLYFTHPQDVPAIRDKIKEHPAVVDIYEYDIPFAKRYLIDKGLIPMEGDEELKMLAFDIETLYHEGEEFAEGPILMISYADEEGARVITWKNIDLPYVDVVSTEKEM'
    const outputBox = screen.getByLabelText('Protein output');
    const letterSelectorButton = screen.getByLabelText('protein view toggle for large screen');
    // interact
     user.click(letterSelectorButton);
    // test button changes
    await waitFor(() => {
      expect(letterSelectorButton).toHaveTextContent('Show one letter code')});
    // test protein changes
    await waitFor(() => {
      expect(outputBox).toHaveTextContent(oneLetter);
    })// switch back other way
     user.click(letterSelectorButton);
     // test button changes
     await waitFor(() => {
      expect(letterSelectorButton).toHaveTextContent('Show three letter code')});
     // test protein changes
     await waitFor(() => {
      expect(outputBox).toHaveTextContent(threeLetter);
    })
 }); 

  test('clicking spacer toggle updates protein view', async () => {
  //setup 
  render(<Translate />); 
  const user = userEvent.setup();
  const outputBox = screen.getByLabelText('Protein output');
  const spacerToggle = screen.getByLabelText('spacer toggle');
  // interact
  user.selectOptions(spacerToggle, ['hyphen (-)']);
  // test protein changes
  const expected = 'Met-Ile-Leu-Asp-Thr-Asp-Tyr-Ile-Thr-Glu-Asp-Gly-Lys-Pro-Val-Ile-Arg-Ile';
  await waitFor(() => {
    expect(outputBox).toHaveTextContent(expected);
  })
}); 

 describe('dummy resize observer test', ()=> {
  it('returns an instance of ResizeObserver', () => {
        // call ResizeObserver
        const dummyResizeObserver = new ResizeObserver();
        expect(dummyResizeObserver).toBeInstanceOf(ResizeObserver);
     });
}); 

 describe('tryptic digest functionality', () => {

test('should cut after Arg/Lys', () => {
  const mockProtein = 'VQPTPKEGRTYADYESVNEC';

  const fragments = ['VQPTPK', 'EGR', 'TYADYESVNEC']
  expect(TrypticDigest(mockProtein)).toEqual(fragments);
});

test('should not cut after ProArg/ProLys', () => {
  const mockProtein = 'VQPTKPEGRPTYADYESVNEC';

  const fragments = ['VQPTKPEGRPTYADYESVNEC']
  expect(TrypticDigest(mockProtein)).toEqual(fragments);
});

test('should cut after multiple Arg/Lys', () => {
  const pdb7X39 = 'GHMSHTILLVQPTKRPEGRTYADYESVNECMEGVCKMYEEHLKRMNPNSPSITYDISQLFDFIDDLADLSCLVYRADTQTYQPYNKDWIKEKIYVLLRRQAQQAGKGSSGSSGSSGSSGSSGSSGSSPGVWGAGGSLKVTILQSSDSRAFSTVPLTPV';

  const fragments = ['GHMSHTILLVQPTK', 'RPEGR', 'TYADYESVNECMEGVCK', 'MYEEHLK', 'R', 'MNPNSPSITYDISQLFDFIDDLADLSCLVYR', 'ADTQTYQPYNK', 'DWIK', 'EK', 'IYVLLR', 'R', 'QAQQAGK', 'GSSGSSGSSGSSGSSGSSGSSPGVWGAGGSLK', 'VTILQSSDSR', 'AFSTVPLTPV']
  expect(TrypticDigest(pdb7X39)).toEqual(fragments);
});
}); 

 describe('mol weight calculations', () => {
  test('single AAs should return correct MW + water', () => {
    //setup 
    const A = 71.037113805;
    const W = 186.079313;
    const S = 87.032028;
    const waterMW = 18.0107946;

    //test
    expect(computeProteinMW(['A'])).toBeCloseTo(A + waterMW);
    expect(computeProteinMW(['W'])).toBeCloseTo(W + waterMW);
    expect(computeProteinMW(['S'])).toBeCloseTo(S + waterMW);
    });

test('MW should be correct for complex protein', () => {
    const pdb7X39Arr = Array.from('GHMSHTILLVQPTKRPEGRTYADYESVNECMEGVCKMYEEHLKRMNPNSPSITYDISQLFDFIDDLADLSCLVYRADTQTYQPYNKDWIKEKIYVLLRRQAQQAGKGSSGSSGSSGSSGSSGSSGSSPGVWGAGGSLKVTILQSSDSRAFSTVPLTPV');

    expect(computeProteinMW(pdb7X39Arr)).toBeCloseTo(17171.34);
    });
})})