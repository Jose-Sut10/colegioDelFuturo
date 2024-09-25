import './reset.css';
import './App.css';
import Encabezado from './components/encabezado/header.jsx';
import Menu from './components/menu/menu.jsx';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Encabezado/>
    </div>
  );
}

export default App;
