import React from 'react';
import ProjectCard from './ProjectCard';
import cardDetails from '../img/card-details.png';

function Projects() {
  return (
    <section>
      <ProjectCard name="MovieCard Library" img={ cardDetails } />
    </section>
  );
}

export default Projects;
