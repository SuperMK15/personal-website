import Link from 'next/link';
import GearComponent from '../components/GearComponent';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <h1>INNOVATOR</h1>
      </div>
      <div className={styles.foreground}>
        <div className={styles.content}>
          <h1 className={styles.name}>Manasva Katyal</h1>
          <h6 className={styles.bio}>UWaterloo CS, Class of 2027</h6>
          <Link href="/terminal">
            <button className={styles.button}>Open Terminal</button>
          </Link>
          <Link href="/about">
            <button className={styles.outlined}>About Me</button>
          </Link>
        </div>
        <img src="./manasva_headshot.png" alt="Illustration" className={styles.illustration} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
