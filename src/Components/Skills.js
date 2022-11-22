import React from 'react';
import logoExpress from '../app/images/logo_express.png';

const Skills = () => {
  const skills = [
    {
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
      alt: 'javascript',
    },
    {
      url: 'https://www.python.org',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
      alt: 'python',
    },
    {
      url: 'https://reactjs.org/',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
      alt: 'react',
    },
    {
      url: 'https://redux.js.org',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
      alt: 'redux',
    },
    {
      url: 'https://expressjs.com',
      img: logoExpress,
      alt: 'express',
    },
    {
      url: 'https://nodejs.org',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
      alt: 'nodejs',
    },
    {
      url: 'https://www.mysql.com/',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
      alt: 'mysql',
    },
    {
      url: 'https://www.postgresql.org',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg',
      alt: 'postgresql',
    },
    {
      url: 'https://webpack.js.org',
      img: 'https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg',
      alt: 'webpack',
    },
    {
      url: 'https://www.w3schools.com/css/',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
      alt: 'css3',
    },
    {
      url: 'https://www.w3.org/html/',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
      alt: 'html5',
    },
    {
      url: 'https://git-scm.com/',
      img: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
      alt: 'git',
    },
    {
      url: 'https://postman.com',
      img: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
      alt: 'postman',
    },
    {
      url: 'https://jasmine.github.io/',
      img: 'https://www.vectorlogo.zone/logos/jasmine/jasmine-icon.svg',
      alt: 'jasmine',
    },
    {
      url: 'https://mochajs.org',
      img: 'https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg',
      alt: 'mocha',
    },
    {
      url: 'https://www.figma.com/',
      img: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
      alt: 'figma',
    },
    {
      url: 'https://www.adobe.com/in/products/illustrator.html',
      img: 'https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg',
      alt: 'illustrator',
    },
    {
      url: 'https://www.photoshop.com/en',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg',
      alt: 'photoshop',
    },
  ];

  return (
    <div className="section" id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => {
          return (
            <a href={skill.url} key={index} target="_blank" rel="noreferrer">
              <img src={skill.img} alt={skill.alt} className="skill-icon" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
