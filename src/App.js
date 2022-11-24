import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/Nav';
import Details from './components/Details';

const App = () => (
  <div className="App">
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/details" element={<Details />} />
    </Routes>
  </div>
);

export default App;
