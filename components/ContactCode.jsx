import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'https://manasvakatyal.vercel.com/',
    href: 'https://manasvakatyal.vercel.com/',
  },
  {
    social: 'email',
    link: 'manasva.katyal@gmail.com',
    href: 'mailto:manasva.katyal@gmail.com',
  },
  {
    social: 'github',
    link: 'SuperMK15',
    href: 'https://github.com/SuperMK15',
  },
  {
    social: 'linkedin',
    link: 'manasvakatyal',
    href: 'https://www.linkedin.com/in/manasva-katyal/',
  }
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
