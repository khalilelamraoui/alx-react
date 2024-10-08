import logo from './holberton-logo.png';
import './App.css';
import { getFullYear, getFooterCopy } from './utils.js';

function App() {
  return (
    <div className="App">
        <div className="App-header">
          <img src={logo} alt="logo" />
          <h1>School dashboard</h1>
        </div>
      <div className="App-body">
        <p>
          Login to access the full dashboard
        </p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="button">OK</button>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </div>
  );
}

export default App;