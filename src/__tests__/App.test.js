import { render } from '@testing-library/react';
import App from '../App';
import ResizeObserver from '../__mocks__/resizeObserver'; // needed to prevent ResizeObserver error



describe ('check components render', () => {
test('nav bar renders', () => {
    const expected = /dna utilities/i;
    const { getByText } = render(< App />); 
    expect(getByText(expected)); 
 });

 test('transcribe component', () => {
  // expected
  const transcribe = 'Transcribe DNA to RNA';
  
  // render
  const { getByText } = render(< App />)

  // test
  expect(getByText(transcribe));
  })

 test('reverse complement component', () => {
  // expected
  const revComp = 'Reverse complement DNA';

  // render
  const { getByText } = render(<App />)

  // test
  expect(getByText(revComp));
 })

 test('translate component', () => {
  // expected
  const translate = 'Translate DNA to protein';

  // render
  const { getByText } = render(<App />)

  // test
  expect(getByText(translate));
 })
}
)