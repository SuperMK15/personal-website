import { getCertifications } from './data/certifications.js';
import CertificationCard from '../components/CertificationCard.jsx';
import styles from '../styles/CertificationsPage.module.css';

const Certifications = ({ certifications }) => {
  return (
    <>
      <div className={styles.user}>
        <div>
          <h3 className={styles.username}>My Certifications</h3>
        </div>
      </div>
      <div className={styles.container}>
        {certifications.map((certification) => (
          <CertificationCard key={certification.id} certification={certification} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const certifications = getCertifications();

  return {
    props: { title: 'Certifications', certifications }
  };
}

export default Certifications;
