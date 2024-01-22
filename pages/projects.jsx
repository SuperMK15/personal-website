import ProjectCard from '../components/ProjectCard';
import styles from '../styles/ProjectsPage.module.css';
import projects from './data/projects.json';

const ProjectsPage = () => {
  return (
    <>
      <h3>My Projects</h3>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;
