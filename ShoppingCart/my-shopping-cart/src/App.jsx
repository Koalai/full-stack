import React from 'react';
import { Navbar } from './components/Navbar';
import './App.css'
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className='pageContainer'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
