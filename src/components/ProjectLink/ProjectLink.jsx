import PropTypes from 'prop-types';
import styles from './ProjectLink.module.css'

const ProjectLink = ({ project }) => {


  return (
    <div className={styles.projectLink}>
      <img
        src={project.image}
        alt={project.name}
      />
      <div className={styles.projectTitle}>
        <div>{project.name}</div>
        <div className={styles.links}>
          <a
            href={project.link1}
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-github'></i>
          </a>
          <a
            href={project.link2}
            target='_blank'
            rel='noreferrer'
          >
            <i className='fa fa-globe'></i>
          </a>
        </div>
      </div>
    </div>
  )
}

ProjectLink.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectLink