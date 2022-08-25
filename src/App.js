import './App.css';
import { Navbar } from './components/navbar';
import { Transcribe } from './components/transcribe';
import { ReverseComplementDNA } from './components/reverse-complement';
import { Translate } from './components/translate';

function App() {
  return (
    <div>
      <navbar className="bg-base-100">
        <Navbar />
      </navbar>
      < Transcribe />
      < ReverseComplementDNA />
      < Translate />
    </div>
  );
}

export default App;
