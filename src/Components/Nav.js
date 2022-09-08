import React from 'react';
import { Link } from 'react-router-dom';
import Logo
 from './Logo';
const Nav = () => {
  return (
    <div className="nav">
        <Logo />
      <div id="nav-links">
        <a href='#bio'>About</a>
        <a href='#projects'>Projects</a>
        <a href='#skills'>Skills</a>
        <a href='#contact'>Contact</a>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link> */}
      </div>
    </div>
  );
};

export default Nav;
