import React from 'react';
import Proj from './Proj';
import proj01 from '../app/images/proj01.png';
import proj02 from '../app/images/proj02.png';
import proj03 from '../app/images/proj03.png';
import proj04 from '../app/images/proj04.png';

const Projects = () => {
  const projects = [
    {
      name: 'Creature Coders',
      url: 'https://creature-coders.onrender.com/',
      github: 'https://github.com/pigeon-programmers/creature-coders-web',
      description:
        'A learn-to-code game designed for the iPad. Learn the basics of programming concepts and Javascript fundamentals while you collect fun hats for your garbage animal friends.',
        img: proj02,
    },
    {
      name: "Bell's Custom Worx",
      url: 'https://bells-custom-worx.onrender.com/',
      github: 'https://github.com/GH2202-Team-Worx/Worx',
      description: 'An ecom site for a family-owned woodworking business.',
      img: proj03,
    },
    {
      name: 'Pictures Drawn Poorly',
      url: 'https://github.com/CaitlinPSherman/stackathon',
      github: 'https://github.com/CaitlinPSherman/stackathon',
      description:
        'A game to make confusingly-bad drawings with your friends. Still a work in progress!',
        img: proj04,
    },
    {
      name: "Caitlin's Portfolio",
      url: 'https://caitlinpsherman.github.io/',
      github: 'https://github.com/CaitlinPSherman/portfolio',
      description:
        "The website you're looking at right now! My personal portfolio, to show off the various projects I've made.",
      img: proj01,
    },
  ];

  return (
    <div className="section section-dark" id="projects">
      <h2>Projects</h2>
      {projects.map((proj, index) => (
        <Proj key={index} projData={proj} />
      ))}
    </div>
  );
};

export default Projects;
