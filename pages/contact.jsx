import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ContactCode from '../components/ContactCode';
import styles from '../styles/ContactPage.module.css';

const images = [
  '/website.png',
  '/gmail.png',
  '/github-logo.png',
  '/linkedin.png',
];

const hrefs = [
  'https://manasvakatyal.vercel.com',
  'mailto:manasva.katyal@gmail.com',
  'https://github.com/SuperMK15',
  'https://www.linkedin.com/in/manasva-katyal/',
];

const ContactPage = () => {
  const controls = useAnimation();

  const startAnimation = async () => {
    await controls.start({
      x: ['-100%', '0%', '0%'],
      transition: {
        duration: 4,
        times: [0, 0.5, 1],
        ease: 'easeInOut',
      }
    });
  };  

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>My Socials</h3>
        <ContactCode />
      </div>
      <div className={styles.carouselContainer}>
        <motion.div
          className={styles.carousel}
          animate={controls}
          initial={{ x: '-100%' }}
        >
          {images.map((image, index) => (
            <a key={index} href={hrefs[index]} target="_blank" rel="noopener noreferrer">
              <motion.img
                src={image}
                whileHover={{ scale: 1.1 }}
                alt={`Image ${index + 1}`}
                style={{ width: '100%', height: 'auto' }}
              />
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
