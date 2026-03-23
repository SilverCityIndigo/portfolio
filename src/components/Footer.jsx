import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.copy}>
          © {new Date().getFullYear()} Youhe Huang
        </span>
        <div className={styles.links}>
          <a href="https://github.com/SilverCityIndigo" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:youhehuang88@gmail.com">Email</a>
          <a href="https://lichess.org" target="_blank" rel="noreferrer">Lichess</a>
        </div>
      </div>
    </footer>
  );
}