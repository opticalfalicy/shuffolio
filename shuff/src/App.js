import React from 'react';
import logo from './logo.svg';

import {Home} from './pages'
import Nav from './navigation/Nav'

import './sass/main.scss';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      
    </div>
  );
}

export default App;
