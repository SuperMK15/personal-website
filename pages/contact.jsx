import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
// import { motion, useAnimation } from 'framer-motion';
import ContactCode from '../components/ContactCode';
import styles from '../styles/ContactPage.module.css';

const images = [
  '/website.png',
  '/gmail.png',
  '/github-logo.png',
  '/linkedin.png',
];

const hrefs = [
  'https://manasvakatyal.tech/',
  'mailto:manasva.katyal@gmail.com',
  'https://github.com/SuperMK15',
  'https://www.linkedin.com/in/manasva-katyal/',
];

const ContactPage = () => {
  // const controls = useAnimation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();

    const res = await emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID,
      {
        subject: subject,
        name: name,
        email: email,
        message: message
      }, process.env.NEXT_PUBLIC_EMAIL_KEY);

    console.log(res);

    if (res.status === 200) {
      alert('Your message has been sent! I will get back to you as soon as possible.');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      alert('There was an error. Please try again in a while.');
    }
  };

  /*const startAnimation = async () => {
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
  }, []);*/

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>My Socials</h3>
        <ContactCode />
      </div>
      <div>
        <h3 className={styles.heading}>Or Send Me a Message Here!</h3>
        <form className={styles.form} onSubmit={submitForm}>
          <div className={styles.flex}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="name">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      {/*<div className={styles.carouselContainer}>
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
          </div>*/}
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
