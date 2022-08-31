import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import selectEvent from 'react-select-event';
import '@testing-library/jest-dom/extend-expect';
// import modules to test
import { Translate } from '../components/translate';


// tbr-tab for test block
describe('transcribe functionality', () => {
  
  test('correct default text shown', () => {
    const { getByText } = render(<Translate />);
    // should display default state ('ATGCAA')
    getByText('GTTATCTATGAGCAGATCACCCGCGATCTG');
  });

  test('correct output generated', async () => {
    // setup
    const { getByRole, findByText } = render(<Translate />);
    const txInput = getByRole('textbox', {
      name: 'DNA input form for translate',
    });
    const user = userEvent.setup();
    // click to select
    await user.click(txInput);
    // expect output box to contain correct output when type in input box
    await user.keyboard('ATG');
    const protein = ('Met');
    findByText(protein);
      });

  test('error if incorrect nt entered', async () => {
    // setup
    const { getByRole, findByText } = render(<Translate />);
    const txInput = getByRole('textbox', {
      name: 'DNA input form for translate',
    });
    const user = userEvent.setup();

    user.click(txInput);
    user.keyboard('H');
    const error = 'Non-DNA character entered, please enter ATCG only.';
    findByText(error);
  });

  test('clicking one/three letter selector flicks button', async () => {
    //setup 
    const { getByLabelText, findByText } = render(<Translate />); 
    const user = userEvent.setup();
    
    const letterSelectorButton = getByLabelText('protein view toggle');
    // interact
    await user.click(letterSelectorButton)
    // test button changes
    findByText('Show three letter code');
    // test protein changes
    findByText('VIYEQITRDL');
 });

 test('clicking spacer toggle updates protein view', async () => {
  //setup 
  const { getByLabelText, findByText } = render(<Translate />); 
  const spacerToggle = getByLabelText('spacer toggle');
  // interact
  await selectEvent.select(spacerToggle, ['hyphen (-)']);
  // test protein changes
  findByText('Val-Ile-Tyr-Glu-Gln-Ile-Thr-Arg-Asp-Leu');
});
});

