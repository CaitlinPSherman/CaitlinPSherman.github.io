import React, { useState } from 'react';
import Logo from './Logo';

const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="nav">
      <a
        href="#home"
        onClick={() => {
          setIsNavExpanded(false);
        }}
      >
        <Logo />
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#f4f1de"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div
        className={isNavExpanded ? 'nav-links expanded' : 'nav-links'}
        onClick={() => {
          setIsNavExpanded(false);
        }}
      >
        <a href="#bio">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Nav;
