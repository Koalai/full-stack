import React from 'react';
import Home from './components/Home';
import { Navbar } from './components/Navbar';
import './App.css'
const App = () => {
  return (
    <div className='pageContainer'>
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
