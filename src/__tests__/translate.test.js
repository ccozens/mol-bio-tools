import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
// import modules to test
import { Translate } from '../components/translate';

afterEach(cleanup);

// tbr-tab for test block
describe('transcribe functionality', () => {
  const { getByRole, getByText, findByText } = render(<Translate />);
  const txInput = getByRole('textbox', {
    name: 'DNA input form for translate',
  });

  test('correct default text shown', () => {
    // should display default state ('ATGCAA')
    getByText((txInput, 'GTTATCTATGAGCAGATCACCCGCGATCTG'));
  });

  test('correct output generated', async () => {
    // click to select
    userEvent.click(txInput);
    // expect output box to contain correct output when type in input box
    userEvent.type(txInput, 'ATG');
    const protein = ('Met');
    findByText(protein);
      });

  test('error if incorrect nt entered', async () => {
    userEvent.click(txInput);
    userEvent.type((txInput, 'H'));
    const error = 'Non-DNA character entered, please enter ATCG only.';
    findByText(error);
  });
});
