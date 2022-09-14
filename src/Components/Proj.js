import React from 'react';

const Proj = ({ projData }) => {
  return (
    <div className='project'>
      <h3>{projData.name}</h3>
      <p>{projData.description}</p>
      <a href='{projData.url}'>Link</a>
      <a href='{projData.github}'>Github</a>
    </div>
  );
};

export default Proj;
