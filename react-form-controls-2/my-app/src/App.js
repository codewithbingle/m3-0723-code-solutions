import logo from './logo.svg';
import './App.css';
import RegistrationFormControlled from './RegistrationFormControlled';
import RegistrationFormUncontrolled from './RegistrationFormUncontrolled';

function App() {
  return (
    <div className="App">
      <h1>Uncontrolled</h1>
      <RegistrationFormUncontrolled />
      <h1>Controlled</h1>
      <RegistrationFormControlled />
    </div>
  );
}

export default App;
