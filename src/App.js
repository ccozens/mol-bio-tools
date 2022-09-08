import './App.css';
import { Navbar } from './components/navbar';
import { Transcribe } from './components/transcribe';
import { ReverseComplementDNA } from './components/reverse-complement';
import { Translate } from './components/translate';


function App() {
  return (
    <div className="pt-4 bg-peach-std text-slate-900">
      <Navbar />
      <Transcribe />
      <ReverseComplementDNA />
      <Translate />
    </div>
  );
}

export default App;
