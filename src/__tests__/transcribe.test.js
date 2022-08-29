import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
// import modules to test
import { Transcribe } from '../components/transcribe';

afterEach(cleanup);

// tbr-tab for test block
describe('transcribe functionality', () => {
  const { getByRole, getByText, findByText } = render(<Transcribe />);
  const txInput = getByRole('textbox', {
    name: 'DNA input form for transcribe',
  });

  test('correct default text shown', () => {
    // should display default state ('ATGCAA')
    getByText((txInput, 'ATGCAA'));
  });

  test('correct output generated', async () => {
    // click to select
    userEvent.click(txInput);
    // expect output box to contain correct output when type in input box
    userEvent.type(txInput, 'ATC');
    const rna = ('AUC');
    findByText(rna);
      });

  test('error if incorrect nt entered initially', async () => {
    userEvent.click(txInput);
    userEvent.type((txInput, 'H'));
    const error = 'Non-DNA character entered, please enter ATCG only.';
    findByText(error);
  });

  test('error if incorrect nt entered after correct characters', async () => {
    userEvent.click(txInput);
    userEvent.type((txInput, 'ATGCATGCH'));
    const error = 'Non-DNA character entered, please enter ATCG only.';
    findByText(error);
  });
});
