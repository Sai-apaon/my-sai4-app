@ -1,31 +0,0 @@
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          Edit <code>src/App.js</code> and save to reload.. apoan.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
          Edit <code>src/App.js</code> and save to reload.. 
        </p>
          Learn React
        </a>
        <form>
        <input type="submit" value="create qoute"></input>
        </form>
      </header>
    </div>
  );
}

export default App;