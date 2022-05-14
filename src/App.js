import React, { useState } from 'react';

import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  return (
    <Router>
      <div
        className="App"
        style={{
          backgroundColor: mode === 'dark' && '#2662a9',
          color: mode === 'dark' && 'white',
          height: window.innerHeight
        }}
      >
        <div
          style={{
            textAlign: 'left',
            backgroundColor: mode === 'dark' ? 'white' : 'black',
            color: mode === 'dark' ? 'white' : '#2662a9',
            padding: '1rem'
          }}
        >
          <nav>
            <Link to="/" className="link" style={{ color: mode === 'dark' ? '#2662a9' : 'white' }}>
              Home
            </Link>
            <Link
              to="/about"
              className="link"
              style={{ color: mode === 'dark' ? '#2662a9' : 'white' }}
            >
              About
            </Link>
          </nav>
        </div>

        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <div style={{ float: 'left', width: '50%' }}>
                  <h1>Text utils : Words count, Character count</h1>
                </div>
                <div
                  style={{
                    float: 'right',
                    width: '50%',
                    paddingTop: '2rem'
                  }}
                >
                  <input type="checkbox" value="Enable dark mode" onChange={toggleMode} />
                  Enable {mode === 'dark' ? 'light' : 'dark'} mode
                </div>
                <TextForm mode={mode} />
              </>
            }
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
