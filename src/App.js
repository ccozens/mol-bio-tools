import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-NQZD4LP'
}

TagManager.initialize(tagManagerArgs)

import './App.css';
import { Navbar } from './components/navbar';
import { Transcribe } from './components/transcribe';
import { ReverseComplementDNA } from './components/reverse-complement';
import { Translate } from './components/translate';

function App() {
  return (
    <div className="bg-slate-700">
      < Navbar />
      < Transcribe />
      < ReverseComplementDNA />
      < Translate />
    </div>
  );
}

export default App;
