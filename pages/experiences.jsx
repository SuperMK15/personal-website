import ExperienceCard from '../components/ExperienceCard';
import { getExperiences } from './data/experiences';
import styles from '../styles/ExperiencesPage.module.css';

const ExperiencePage = ({ experiences }) => {
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

export async function getStaticProps() {
  const experiences = getExperiences();

  return {
    props: { title: 'Experiences', experiences },
  };
}

export default ExperiencePage;
