import React from 'react';
// import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Bio from './Components/Bio';
import Projects from './Components/Projects';
import Nav from './Components/Nav';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Nav />
      {/* <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<Bio />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/skills" element={<Skills />}/>
    </Routes> */}
      <Home  />
      <Bio />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
