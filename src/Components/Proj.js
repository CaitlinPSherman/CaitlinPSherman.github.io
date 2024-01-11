import React from 'react';

const Proj = ({ projData }) => {
  return (
    <div className="project">
      <h3>{projData.name}</h3>
      <div className="proj-img-container">
        <img src={projData.img} alt="website screenshot" className="proj-img" />
      </div>
      <p>{projData.description}</p>

      {projData.url === projData.github ?
      (<></>) :
      (<a href={projData.url} target="_blank" rel="noreferrer noopener">
        Link
      </a>)}

      <a href={projData.github} target="_blank" rel="noreferrer noopener">
        Github
      </a>
    </div>
  );
};

export default Proj;
