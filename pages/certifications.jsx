import CertificationCard from '../components/CertificationCard.jsx';
import styles from '../styles/CertificationsPage.module.css';
import certifications from './data/certifications.json';

const Certifications = () => {
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
  return {
    props: { title: 'Certifications' },
  };
}

export default Certifications;
