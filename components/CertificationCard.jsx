import React from 'react';
import LinkIcon from './icons/LinkIcon';
import styles from '../styles/CertificationCard.module.css';

const CertificationCard = ({ certification }) => {
  return (
    <div className={styles.card}>
      <div>
        <h3 className={styles.title}>{certification.name}</h3>
        <p className={styles.credential_button}>
          <button
            onClick={() => window.open(certification.credential_link, "_blank", "noopener noreferrer")}
          >
            View Credential
          </button>
          {" "}
          <a href={certification.credential_link} target="_blank" rel="noopener noreferrer">
            <LinkIcon color="magenta"/>
          </a>
        </p>
      </div>
    </div>
  );
};

export default CertificationCard;
