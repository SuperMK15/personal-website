import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles/ExperienceCard.module.css';

const ExperienceCard = ({ experience }) => {
  const controls = useAnimation();
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleClick = async () => {
    setIsCardOpen(!isCardOpen);
    await controls.start({ height: 'auto' });
  };

  return (
    <motion.div
      className={styles.container}
      onClick={handleClick}
      animate={controls}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <div className={styles.content}>
        <h3 className={styles.title}>{experience.title}</h3>
        {isCardOpen && (
          <motion.div
            className={styles.additionalContent}
            animate={{ opacity: 1 }}
          >
            <p className={styles.date}>{experience.date}</p>
            <p>{experience.description}</p>
          </motion.div>
        )}
        {!isCardOpen && (
          <p className={styles.clickMeText}>Click me to see more!</p>
        )}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
