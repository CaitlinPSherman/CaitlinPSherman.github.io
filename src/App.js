import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Bio from './Components/Bio';
import Projects from './Components/Projects';
import Nav from './Components/Nav';

function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<Bio />}/>
      <Route path="/Projects" element={<Projects />}/>
    </Routes>
    </>
  );
}

export default App;
