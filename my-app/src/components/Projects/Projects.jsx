import React from 'react';
import styles from './Project.module.css';
import ProjectCard from '../../common/ProjectCard';
import { PROJECTS } from '../../utils/data';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h5>Projects</h5>
      <div className={styles.projectsContainer}>
        {PROJECTS.map((item,index)=>(
          <React.Fragment key={`${index}`}>
            <ProjectCard
            src={item.src}
            link={item.link}
            h3={item.h3}
            p={item.p}
            />
          </React.Fragment>
        ))}
        
      </div>
    </section>
  );
}

export default Projects;
