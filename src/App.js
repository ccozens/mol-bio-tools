import './App.css';
import { Navbar } from './components/navbar';
import { Transcribe } from './components/transcribe';
import { ReverseComplementDNA } from './components/reverse-complement';
import { Translate } from './components/translate';


function App() {
  return (
    <div className="pt-4 bg-orange-200 text-slate-900">
      <Navbar />
      <Translate />
      <Transcribe />
      <ReverseComplementDNA />
    </div>
  );
}

export default App;
