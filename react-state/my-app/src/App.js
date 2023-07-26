import logo from './logo.svg';
import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <ToggleButton text="Btn 1" color="red" />
        <ToggleButton text="Btn 1" color="green" />
        <ToggleButton text="Btn 1" color="blue" />
      </header>
    </div>
  );
}

export default App;
