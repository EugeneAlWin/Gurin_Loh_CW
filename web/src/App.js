import React from 'react';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main />
      </Router>
    </div>
  );
}

export default App;
