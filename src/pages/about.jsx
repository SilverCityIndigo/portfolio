import Head from 'next/head';
import styles from './about.module.css';

const skills = [
  { category: 'Languages',  items: ['Python', 'JavaScript', 'Racket', 'SQL', 'C'] },
  { category: 'Frontend',   items: ['React', 'Next.js', 'Vite', 'Chart.js'] },
  { category: 'Backend',    items: ['FastAPI', 'SQLite', 'REST APIs'] },
  { category: 'Tools',      items: ['Git', 'Vercel', 'Railway', 'VS Code'] },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About — Youhe Huang</title>
      </Head>

      <main className="page">
        <div className={`${styles.header} reveal reveal-1`}>
          <span className="section-tag">02 // About</span>
          <h1>About me.</h1>
        </div>

        <div className={`${styles.body} reveal reveal-2`}>
          <div className={styles.bio}>
            <p>
              I'm Youhe Huang, a Mathematics/Financial Analysis & Risk Management student at the University
              of Waterloo. My current career passion lies in the intersection of data and product. I am particularly drawn to Data Science and the FinTech industry. 
            </p>
            <p>
              Beyond my professional pursuits, 
            </p>
            <p>
              
            </p>
          </div>

          <div className={styles.card}>
            {[
              ['School',      'University of Waterloo'],
              ['Program',     'Computer Science'],
              ['Chess title', 'National Master (NM)'],
              ['Location',    'Toronto, ON'],
              ['GitHub',      'SilverCityIndigo', 'https://github.com/SilverCityIndigo'],
            ].map(([label, val, href]) => (
              <div key={label} className={styles.fact}>
                <span className={styles.factLabel}>{label}</span>
                {href
                  ? <a href={href} target="_blank" rel="noreferrer" className={styles.factVal}>{val}</a>
                  : <span className={styles.factVal}>{val}</span>
                }
              </div>
            ))}
          </div>
        </div>

        <hr className="divider" />

        <div className={`${styles.skillsSection} reveal reveal-3`}>
          <span className="section-tag">Skills</span>
          <div className={styles.skillsGrid}>
            {skills.map(({ category, items }) => (
              <div key={category} className={styles.skillGroup}>
                <h3 className={styles.skillCat}>{category}</h3>
                <ul className={styles.skillList}>
                  {items.map(item => (
                    <li key={item} className={styles.skillItem}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}