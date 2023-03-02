import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
// import modules to test
import { ReverseComplementDNA } from '../../components/reverse-complement';

// tbr-tab for test block
describe('transcribe functionality', () => {
  test('correct default text shown', () => {
    render(<ReverseComplementDNA />);
    const txInput = screen.getByRole('textbox', {
      name: 'DNA input form for reverse complement',
    });
    // should display default state ('ATGCAA')
    screen.getByText((txInput, 'ATGCAA'));
  });

  test('correct output generated', async () => {
    // setup
    const user = userEvent.setup();
    render(<ReverseComplementDNA />);
    const txInput = screen.getByRole('textbox', {
      name: 'DNA input form for reverse complement',
    });
    const output = screen.getByLabelText("reverse complement output");
    // click to select
    await user.click(txInput);
    // expect output box to contain correct output when type in input box
    await user.type(txInput, 'ATC');
    // expected output
    const revComp = ('GAT');
    // test for expected output
    await waitFor(() => {
      expect(output).toHaveTextContent(revComp);
    });
      });

  test('error if incorrect nt entered', async () => {
    // setup
    const user = userEvent.setup();
    render(<ReverseComplementDNA />);
    const txInput = screen.getByRole('textbox', {
      name: 'DNA input form for reverse complement',
    });
    const output = screen.getByLabelText("reverse complement output");

    await user.click(txInput);
    await user.keyboard('H');
    // test for expected output
    const error = 'Non-DNA character entered, please enter ATCG only.';
    await waitFor(() => {
      expect(output).toHaveTextContent(error);
    });
      });
  });

  test('error if incorrect nt entered after correct characters', async () => {
    // setup
    const user = userEvent.setup();
    render(<ReverseComplementDNA />);
    const txInput = screen.getByRole('textbox', {
      name: 'DNA input form for reverse complement',
    });
    const output = screen.getByLabelText("reverse complement output");
    
    await user.click(txInput);
    await user.keyboard('ATGCATGCH');
    // test for expected output
    const error = 'Non-DNA character entered, please enter ATCG only.';
    await waitFor(() => {
      expect(output).toHaveTextContent(error);
    });
      });

