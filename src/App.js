import TagManager from 'react-gtm-module';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Transcribe } from './components/transcribe';
import { ReverseComplementDNA } from './components/reverse-complement';
import { Translate } from './components/translate';

const tagManagerArgs = {
  gtmId: 'GTM-NQZD4LP',
};

TagManager.initialize(tagManagerArgs);

function App() {
  return (
    <div className="bg-peach-std text-slate-900">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Transcribe />
      <ReverseComplementDNA />
      <Translate />
    </div>
  );
}

export default App;
