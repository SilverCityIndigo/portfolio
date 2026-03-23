import Head from 'next/head';
import { useState } from 'react';
import styles from './projects.module.css';

const projects = [
  {
    id: 'fpl-lab',
    num: '01',
    title: 'FPL Lab',
    tagline: 'Live Fantasy Premier League analytics',
    description:
      'A full-stack analytics platform for Fantasy Premier League managers. Features xG vs Goals scatter plots, form timeline charts, positional gameweek breakdown tables, and a live data sync pipeline. Built solo from scratch — React/Vite frontend, FastAPI backend, SQLite database.',
    tech: ['React', 'Vite', 'FastAPI', 'Python', 'SQLite', 'Chart.js', 'Railway', 'Vercel'],
    status: 'Active',
    github: 'https://github.com/SilverCityIndigo/fpl-optimizer',
    live: 'https://fpl-optimizer-one.vercel.app/',
    year: '2024',
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <>
      <Head>
        <title>Projects — Youhe Huang</title>
      </Head>

      <main className="page">
        <div className={`${styles.header} reveal reveal-1`}>
          <span className="section-tag">03 // Projects</span>
          <h1>Things I've built.</h1>
          <p className={styles.intro}>
            Personal projects I've shipped independently.
          </p>
        </div>

        <div className={styles.list}>
          {projects.map((p, i) => (
            <article
              key={p.id}
              className={`${styles.card} ${active === p.id ? styles.cardActive : ''} reveal reveal-${Math.min(i + 2, 5)}`}
              onMouseEnter={() => setActive(p.id)}
              onMouseLeave={() => setActive(null)}
            >
              <div className={styles.cardTop}>
                <span className={styles.num}>{p.num}</span>
                <span className={styles.year}>{p.year}</span>
                <span className={`${styles.status} ${styles[p.status.toLowerCase()]}`}>
                  {p.status}
                </span>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardLeft}>
                  <h2 className={styles.title}>{p.title}</h2>
                  <p className={styles.tagline}>{p.tagline}</p>

                  {/* Expandable detail — smooth height transition */}
                  <div className={`${styles.detail} ${active === p.id ? styles.detailOpen : ''}`}>
                    <p className={styles.desc}>{p.description}</p>
                    <div className={styles.tags}>
                      {p.tech.map(t => (
                        <span key={t} className={styles.tag}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={styles.links}>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                      GitHub ↗
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className={styles.linkBtnPrimary}>
                      Live →
                    </a>
                  )}
                </div>
              </div>

              {/* Animated accent line on active */}
              <div className={styles.accentLine} />
            </article>
          ))}

          {/* Coming soon placeholder */}
          <div className={`${styles.soon} reveal reveal-4`}>
            <span className={styles.soonNum}>02</span>
            <span className={styles.soonText}>More coming soon_</span>
          </div>
        </div>
      </main>
    </>
  );
}