import React from 'react';
import headshot from '../app/images/Caitlin_pic.jpg';

const Home = () => {
  return (
    <div id="home" className='section-dark'>
      <div className="headshot-container">
        <img src={headshot} alt="headshot" className="headshot" />
      </div>
      <p>Hello!</p>
      <h2>I'm Caitlin.</h2>
      <p>
        I make stuff for the internet - welcome to my own little chunk of it.
      </p>
    </div>
  );
};

export default Home;
