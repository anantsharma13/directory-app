import Directory from './components/Directory';
import { dirStructure } from './assets/data';
import './App.css';

function App() {
  return (
    <div className="App">
        <Directory data={dirStructure} />
    </div>
  );
}

export default App;
