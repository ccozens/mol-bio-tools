import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
// import modules to test
import { ReverseComplementDNA } from '../components/reverse-complement';

afterEach(cleanup);

// tbr-tab for test block
describe('transcribe functionality', () => {
  test('correct default text shown', () => {
    const { getByRole, getByText } = render(<ReverseComplementDNA />);
    const txInput = getByRole('textbox', {
      name: 'DNA input form for reverse complement',
    });
    // should display default state ('ATGCAA')
    getByText((txInput, 'ATGCAA'));
  });

  test('correct output generated', async () => {
    const { getByRole, findByText } = render(<ReverseComplementDNA />);
    const txInput = getByRole('textbox', {
      name: 'DNA input form for reverse complement',
    });
    // click to select
    userEvent.click(txInput);
    // expect output box to contain correct output when type in input box
    userEvent.type(txInput, 'ATC');
    const revComp = ('GAT');
    findByText(revComp);
      });

  test('error if incorrect nt entered', async () => {
    const { getByRole, findByText } = render(<ReverseComplementDNA />);
    const txInput = getByRole('textbox', {
      name: 'DNA input form for reverse complement',
    });
    userEvent.click(txInput);
    userEvent.type((txInput, 'H'));
    const error = 'Non-DNA character entered, please enter ATCG only.';
    findByText(error);
  });

  test('error if incorrect nt entered after correct characters', async () => {
    const { getByRole, findByText } = render(<ReverseComplementDNA />);
    const txInput = getByRole('textbox', {
      name: 'DNA input form for reverse complement',
    });
    userEvent.click(txInput);
    userEvent.type((txInput, 'ATGCATGCH'));
    const error = 'Non-DNA character entered, please enter ATCG only.';
    findByText(error);
  });
});
