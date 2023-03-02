import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
// import modules to test
import { Transcribe } from '../../components/transcribe';


// tbr-tab for test block
describe('transcribe functionality', () => {
  
  test('correct default text shown', () => {
    // setup
    render(<Transcribe />);
    const txInput = screen.getByRole('textbox', {
      name: 'DNA input form for transcribe'
    });
    // should display default state ('ATGCAA')
    const defaultText = 'ATGCAA'
    expect(txInput).toHaveTextContent(defaultText);
  });


  test('input box blanks when clicked', async () => {
    // setup
    render(<Transcribe />);
    const user = userEvent.setup();
    const txInput = screen.getByRole('textbox', {
      name: 'DNA input form for transcribe'
    });
    // click to select
    user.click(txInput);

    // should display default state ('ATGCAA')
    const defaultText = 'ATGCAA'
    await waitFor(() => {
      expect(txInput).not.toHaveTextContent(defaultText);
    })
  })
 
  test('correct output generated', async () => {
    render(<Transcribe />);
    // setup
    const user = userEvent.setup();
    const txInput = screen.getByRole('textbox', {
      name: 'DNA input form for transcribe'
    });
    const output =  screen.getByLabelText('RNA output')
    // click to select
    await user.click(txInput); // await needed for action to complete before next step
    // expect output box to contain correct output when type in input box
    user.keyboard('GATC');
    const rna = ('GAUC');
    await waitFor(() => {
      expect(output).toHaveTextContent(rna);
    })
      });

  test('error if incorrect nt entered initially', async () => {
    render(<Transcribe />);
    // setup
    const user = userEvent.setup();
    const txInput = screen.getByRole('textbox', {
      name: 'DNA input form for transcribe'
    });
    const output =  screen.getByLabelText('RNA output')

    await user.click(txInput);
    await user.keyboard((txInput, 'H'));
    const error = 'Non-DNA character entered, please enter ATCG only.';
    await waitFor(() => {
      expect(output).toHaveTextContent(error);
    });
  });

  test('error if incorrect nt entered after correct characters', async () => {
    render(<Transcribe />);
    // setup
    const user = userEvent.setup();
    const txInput = screen.getByRole('textbox', {
      name: 'DNA input form for transcribe'
    });
    const output =  screen.getByLabelText('RNA output')

    await user.click(txInput);
    await user.keyboard((txInput, 'H'));
    const error = 'Non-DNA character entered, please enter ATCG only. Non-DNA characters at positions: 1';
    await waitFor(() => {
      expect(output).toHaveTextContent(error);
    });
  }); 
});


/*
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
  */