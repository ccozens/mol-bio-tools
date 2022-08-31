import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
// import modules to test
import { Transcribe } from '../components/transcribe';


// tbr-tab for test block
describe('transcribe functionality', () => {
  
  test('correct default text shown', () => {
    // setup
    const { getByRole, getByText} = render(<Transcribe />);
    const txInput = getByRole('textbox', {
      name: 'DNA input form for transcribe'
    });

    // should display default state ('ATGCAA')
    const defaultText = 'ATGCAA'
    getByText((txInput, defaultText));
  });

  test('input box blanks when clicked', async () => {
    // setup
    const { getByRole, findByText} = render(<Transcribe />);
    const txInput = getByRole('textbox', {
      name: 'DNA input form for transcribe'
    });
    const user = userEvent.setup();
    // click to select
    await user.click(txInput);
    // should not display default text  ('ATGCAA')
    findByText((txInput, ''));
  })

  test('correct output generated', async () => {
    const { getByRole, findByText } = render(<Transcribe />);
    // setup
    const user = userEvent.setup();
    const txInput = getByRole('textbox', {
      name: 'DNA input form for transcribe'
    });
    // click to select
    await user.click(txInput);
    // expect output box to contain correct output when type in input box
    await user.keyboard('ATC');
    const rna = ('AUC');
    findByText(rna);
      });

  test('error if incorrect nt entered initially', async () => {
    const { findByText, getByRole } = render(<Transcribe />);
    // setup
    const user = userEvent.setup();
    const txInput = getByRole('textbox', {
      name: 'DNA input form for transcribe'
    });
    
    await user.click(txInput);
    await user.keyboard((txInput, 'H'));
    const error = 'Non-DNA character entered, please enter ATCG only.';
    findByText(error);
  });

  test('error if incorrect nt entered after correct characters', async () => {
    const { getByRole, getByText, findByText } = render(<Transcribe />);
    // setup
    const user = userEvent.setup();
    const txInput = getByRole('textbox', {
      name: 'DNA input form for transcribe'
    });

    await user.click(txInput);
    await user.keyboard('ATGCATGCH');
    const error = 'Non-DNA character entered, please enter ATCG only.';
    findByText(error);
  });
});
