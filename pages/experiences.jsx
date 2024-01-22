import ExperienceCard from '../components/ExperienceCard';
import styles from '../styles/ExperiencesPage.module.css';
import experiences from './data/experiences.json';

const ExperiencePage = () => {
  return (
    <>
      <h3>
        View my Resume {' '}
        <a
          href="https://drive.google.com/file/d/1h6b5aXJrZPdmlCJf2oF9NuVBUucAVotR/view?usp=sharing"
          target="_blank"
          rel="noopener"
          className={styles.underline}
        >
          Here
        </a>
      </h3>
      <div className={styles.container}>
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </>
  );
};

export default ExperiencePage;
