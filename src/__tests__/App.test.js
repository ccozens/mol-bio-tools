import { render, screen } from '@testing-library/react';
import App from '../App';
import ResizeObserver from '../__mocks__/resizeObserver'; // needed to prevent ResizeObserver error



describe ('check components render', () => {
test('nav bar renders', () => {
    render(< App />); 
    const expected = /dna utilities/i;
    expect(screen.getByText(expected)).toBeInTheDocument(); 
 });

 test('transcribe component', () => {
  // expected
  const transcribe = 'Transcribe DNA to RNA';
  
  // render
  render(< App />)

  // test
  expect(screen.getByText(transcribe)).toBeInTheDocument();
  })

 test('reverse complement component', () => {
  // expected
  const revComp = 'Reverse complement DNA';

  // render
  render(<App />)

  // test
  expect(screen.getByText(revComp)).toBeInTheDocument();
 })

 test('translate component', () => {
  // expected
  const translate = 'Translate DNA to protein';

  // render
  render(<App />)

  // test
  expect(screen.getByText(translate)).toBeInTheDocument();
 })
}
)

describe('dummy resize observer test', ()=> {
    it('returns an instance of ResizeObserver', () => {
          // call ResizeObserver
          const dummyResizeObserver = new ResizeObserver();
          expect(dummyResizeObserver).toBeInstanceOf(ResizeObserver);
       });
  });