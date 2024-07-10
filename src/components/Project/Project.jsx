import styles from './Project.module.css'
import PropTypes from 'prop-types'

const Project = ({ project }) => {
  return (
    <div className={styles.project}>
      <div className={styles.imgContainer}>
        <img
          alt={project.name}
          src={project.image}
        />
      </div>
      <div className={styles.projectInfo}>
        <span className={styles.projectName}>{project.name}</span>
        <p className={styles.projectDescription}>{project.description1}</p>
        <p className={styles.projectDescription}>{project.description2}</p>
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
            <i className="fa fa-globe"></i>
          </a>
        </div>
      </div>
    </div>
  )
}
Project.propTypes = {
  project: PropTypes.object.isRequired
}
export default Project