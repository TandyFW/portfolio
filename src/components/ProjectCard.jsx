import React from 'react';

function ProjectCard({ name, img }) {
  return (
    <article className='project-card'>
      <img src={ img } alt="img" />
      <h2>{ name }</h2>
    </article>
  )
}

export default ProjectCard;
