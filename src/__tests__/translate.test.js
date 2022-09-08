import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ResizeObserver from '../__mocks__/resizeObserver';  // needed to prevent ResizeObserver error
// import modules to test
import { Translate } from '../components/translate';
import { TrypticDigest } from '../scripts/trypticDigest';

describe('translate functionality', () => {  
  
  test('correct default text shown', () => {
    render(<Translate />);
    // should display default state ('ATGCAA')
    screen.getByText('GTTATCTATGAGCAGATCACCCGCGATCTG');
  });

  test('correct output generated', async () => {
    // setup
    render(<Translate />);
    const txInput = screen.getByRole('textbox', {
      name: 'DNA input form for translate',
    });
    const output = screen.getByLabelText('Protein output');
    const user = userEvent.setup();
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
        const output = screen.getByLabelText('Protein output');
    
        await user.click(txInput);
        await user.keyboard('at');
        const error = 'DNA is not in triplets - please input sequence with complete triplets.';
        await waitFor(() => {
          expect(output).toHaveTextContent(error);
        })
      });

  test('error if incorrect nt entered', async () => {
    // setup
    render(<Translate />);
    const txInput = screen.getByRole('textbox', {
      name: 'DNA input form for translate',
    });
    const user = userEvent.setup();

    user.click(txInput);
    user.keyboard('AGH');
    const error = 'Non-DNA character entered, please enter ATCG only. Non-DNA characters at positions: 2';
    expect(await screen.findByText(error)).toBeInTheDocument();
  });



  test('clicking one/three letter selector flicks button', async () => {
    //setup 
    render(<Translate />); 
    const user = userEvent.setup();
    
    const letterSelectorButton = screen.getByLabelText('protein view toggle');
    // interact
     user.click(letterSelectorButton);
    // test button changes
    expect(await screen.findByText('Show one letter code')).toBeInTheDocument();
    // test protein changes
    expect(await screen.findByText('VIYEQITRDL')).toBeInTheDocument();
    // switch back other way
     user.click(letterSelectorButton);
     // test button changes
     expect(await screen.findByText('Show three letter code')).toBeInTheDocument();
     // test protein changes
     expect(await screen.findByText('ValIleTyrGluGlnIleThrArgAspLeu')).toBeInTheDocument();
    
 });

 test('clicking spacer toggle updates protein view', async () => {
  //setup 
  render(<Translate />); 
  const user = userEvent.setup();
  const spacerToggle = screen.getByLabelText('spacer toggle');
  // interact
  user.selectOptions(spacerToggle, ['hyphen (-)']);
  // test protein changes
  expect (await screen.findByText('Val-Ile-Tyr-Glu-Gln-Ile-Thr-Arg-Asp-Leu')).toBeInTheDocument();
});
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
})