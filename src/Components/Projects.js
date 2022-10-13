import React from 'react';
import Proj from './Proj';

const Projects = () => {
  const projects = [
    {
      name: "Bell's Custom Worx",
      url: 'https://bells-custom-worx.herokuapp.com/',
      github: 'https://github.com/GH2202-Team-Worx/Worx',
      description: 'An ecom site for a family-owned woodworking business.',
    },
    {
      name: 'Pictures Drawn Poorly',
      url: 'https://pictures-drawn-poorly.herokuapp.com/',
      github: 'https://github.com/CaitlinPSherman/stackathon',
      description: 'A game to make confusingly-bad drawings with your friends. Still a work in progress!',
    },
    {
      name: 'Creature Coders',
      url: 'https://creature-coders.herokuapp.com/',
      github: 'https://github.com/pigeon-programmers/creature-coders-web',
      description:
        'A learn-to-code game designed for the iPad. Learn the basics of programming concepts and Javascript fundamentals while you collect fun hats for your garbage animal friends.',
    },
    {
      name: "Caitlin's Portfolio",
      url: 'caitlinpsherman.com',
      github: 'https://github.com/CaitlinPSherman/portfolio',
      description:
        "The website you're looking at right now! My personal portfolio, to show off the various projects I've made.",
    },
  ];

  return (
    <div className="section section-dark" id="projects" >
      <h2>Projects</h2>
      {projects.map((proj, index) => (
        <Proj key={index} projData={proj} />
      ))}
    </div>
  );
};

export default Projects;
