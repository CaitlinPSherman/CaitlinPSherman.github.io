import React from 'react';
import headshot from '../app/images/Caitlin_pic.jpg'

const Home = () => {
  return (
    <div className='section' id='home'>

      <p>Hello!</p>
      <img src={headshot} alt='headshot' id='headshot'/>
      <h2>I'm Caitlin.</h2>
      <p>I make stuff for the internet - welcome to my own little chunk of it.</p>
    </div>
  );
};

export default Home;
