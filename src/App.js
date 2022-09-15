import './App.css';
import { Navbar } from './components/navbar';
import { Analyse } from './components/analyse';
import { Translate } from './components/translate';
import { ReformatProtein } from './components/reformatProtein'
import { Transcribe } from './components/transcribe';
import { ReverseComplementDNA } from './components/reverse-complement';


function App() {
  return (
    <div className="pt-4 bg-orange-200 text-slate-900">
      < Navbar />
      < Analyse />
      < Translate />
      < ReformatProtein />
      < Transcribe />
      < ReverseComplementDNA />
    </div>
  );
}

export default App;
