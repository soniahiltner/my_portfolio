import styles from './Projects.module.css'
import { projects } from '../../data/bd'
import Project from '../Project/Project'
import ProjectLink from '../ProjectLink/ProjectLink'

const Projects = () => {

  const lastProjects = projects.filter((project) => project.type === 'last')

  const fccProjects = projects.filter((project) => project.type === 'fcc')
  return (
    <div
      className={styles.projects}
      id='projects'
    >
      <h3>Personal Projects</h3>
      <div className={styles.projectsContainer}>
        {lastProjects.map((project) => (
          <Project
            key={project.id}
            project={project}
          />
        ))}
      </div>
      <h3>FreeCodeCamp Projects</h3>
      <div className={styles.fccProjectsContainer}>
        {fccProjects.map((project) => (
          <ProjectLink
            key={project.id}
            project={project}
          />
        ))}
      </div>
      <a
        className={styles.fccLink}
        href='https://www.freecodecamp.org/fcc8021d9ee-a905-4650-bda4-14371e852283'
        target='_blank'
        rel='noreferrer'
      >
        See more in my freeCodeCamp Curriculum{' '}
        <i className='fa fa-arrow-right'></i>
      </a>
    </div>
  )
}

export default Projects