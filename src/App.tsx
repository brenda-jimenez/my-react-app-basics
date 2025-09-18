import React from 'react';
import './App.css';
import FetchForm from './components/FetchForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Fetching some data via a custom hook</p>
      </header>
      <div className="App-form">
        <FetchForm />
      </div>
    </div>
  );
}

export default App;
