import React from 'react';
import styles from '../styles/ExperienceCard.module.css';

const ExperienceCard = ({ experience }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>{experience.title}</h3>
        <div className={styles.additionalContent}>
          <p className={styles.date}>{experience.date}</p>
          <p>{experience.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
