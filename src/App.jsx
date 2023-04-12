import './App.css';
import { Home } from './components/home';
import { Navbar } from './components/navbar';
import { Redirect } from './components/Redirect';

function App() {
  return (
    <div className="pt-4 bg-orange-100 text-slate-900">
      <Navbar />
      <Redirect />
      <Home />
    </div>
  );
}

export default App;
