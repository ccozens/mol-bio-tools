import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
// import modules to test
import { ReverseComplementDNA } from '../components/reverse-complement';

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
    // setup
    const user = userEvent.setup();
    const { getByRole, findByText } = render(<ReverseComplementDNA />);
    const txInput = getByRole('textbox', {
      name: 'DNA input form for reverse complement',
    });
    // click to select
    await user.click(txInput);
    // expect output box to contain correct output when type in input box
    await user.type(txInput, 'ATC');
    // expected output
    const revComp = ('GAT');
    // test for expected output
    findByText(revComp);
      });

  test('error if incorrect nt entered', async () => {
    // setup
    const user = userEvent.setup();
    const { getByRole, findByText } = render(<ReverseComplementDNA />);
    const txInput = getByRole('textbox', {
      name: 'DNA input form for reverse complement',
    });
    await user.click(txInput);
    await user.keyboard('H');
    // test for expected output
    const error = 'Non-DNA character entered, please enter ATCG only.';
    findByText(error);
  });

  test('error if incorrect nt entered after correct characters', async () => {
    // setup
    const user = userEvent.setup();
    const { getByRole, findByText } = render(<ReverseComplementDNA />);
    const txInput = getByRole('textbox', {
      name: 'DNA input form for reverse complement',
    });
    await user.click(txInput);
    await user.keyboard('ATGCATGCH');
    // test for expected output
    const error = 'Non-DNA character entered, please enter ATCG only.';
    findByText(error);
  });

 
});
