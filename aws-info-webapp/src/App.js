// import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Search from './components/Search';
import initialDetails from './data/initialDetails.js';

function App() {
  return (
    <div className="tc bg-green ma0 pa4 min-vh-100">
      <Search details={initialDetails}/>
    </div>
  );
}

export default App;

/*function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <div>


    </div>
  );
}*/

//export default App;
