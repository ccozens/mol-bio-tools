import { describe, test } from 'vitest';
import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ResizeObserver from '../../__mocks__/resizeObserver';  // needed to prevent ResizeObserver error
// import modules to test
import { AnalyseProtein } from '../../components/analyseProtein';
import { computeProteinMW } from '../../functions/computeProteinMW';



describe('Analyse functionality', () => {  

  test('correct default text shown', () => {
    // render AnalyseProtein component
    

    render(<AnalyseProtein />);
    // should display default state 
    const inputBox = screen.getByLabelText('Protein input form for analysis');
    const tgo = 'MILDTDYITEDGKPVIRIFKKENGEFKIDYDRNFEPYIYALLKDDSAIEDVKKITAERHGTTVRVVRAEKVKKKFLGRPIE';
    expect(inputBox).toHaveTextContent(tgo);
  });

  test('correct output generated', async () => {
    // setup
    render(<AnalyseProtein />);
    const user = userEvent.setup();
    const txInput = screen.getByRole('textbox', {
      name: 'Protein input form for analysis',
    });
    // click to select
    await user.click(txInput);
    // expect output box to contain correct output when type in input box
    const protein = ('MILD');
    const output = screen.getByLabelText('Protein parameters');
    user.keyboard(protein);
    await waitFor(() => {
      expect(output).toHaveTextContent('4 amino acids')
    })
    })
   
      });

      test('error if non-cognate AA entered', async () => {
        // setup
        render(<AnalyseProtein />);
        const txInput = screen.getByRole('textbox', {
          name: 'Protein input form for analysis',
        });
        const outputBox = screen.getByLabelText('Protein parameters');
        const user = userEvent.setup();
        await user.click(txInput);
        await user.keyboard('O');
        const error = 'Non-amino acid character entered, please enter only 20 natural residues.';
        await waitFor(() => {
          expect(outputBox).toHaveTextContent(error);
        });
        });
        

describe('dummy resize observer test', ()=> {
  it('returns an instance of ResizeObserver', () => {
        // call ResizeObserver
        const dummyResizeObserver = new ResizeObserver();
        expect(dummyResizeObserver).toBeInstanceOf(ResizeObserver);
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


});

