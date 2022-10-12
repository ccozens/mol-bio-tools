import { render, screen } from '@testing-library/react';
import { Home } from '../components/home';
import ResizeObserver from '../__mocks__/resizeObserver'; // needed to prevent ResizeObserver error


describe ('check components render', () => {


 test('transcribe component', () => {
  // expected
  const transcribe = 'Transcribe DNA to RNA';
  
  // render
  render(< Home />)

  // test
  expect(screen.getByText(transcribe)).toBeInTheDocument();
  })

 test('reverse complement component', () => {
  // expected
  const revComp = 'Reverse complement DNA';

  // render
  render(<Home />)

  // test
  expect(screen.getByText(revComp)).toBeInTheDocument();
 })

 test('translate component', () => {
  // expected
  const translate = 'Translate DNA to protein';

  // render
  render(<Home />)

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