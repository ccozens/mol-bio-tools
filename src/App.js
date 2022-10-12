import './App.css';
import { Home } from './components/home';
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className="pt-4 bg-orange-200 text-slate-900">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
