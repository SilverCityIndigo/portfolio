import Head from 'next/head';
import Link from 'next/link';
import TorontoSkyline from '@/components/TorontoSkyline';
import styles from './index.module.css';

const stats = [
  { value: 'NM',    label: 'Chess Title'    },
  { value: 'UW',    label: 'Comp Sci'       },
  { value: 'FPL',   label: 'Analytics Lab'  },
  { value: 'TO',    label: 'Toronto'        },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Youhe Huang</title>
        <meta name="description" content="Youhe Huang — CS student at UWaterloo, National Chess Master, full-stack developer." />
      </Head>

      <main className={styles.main}>
        {/* ── Hero ── */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={`section-tag reveal reveal-1`}>
              youhe huang // Math/Finance @ Uwaterloo
            </span>

            <h1 className={`${styles.title} reveal reveal-2`}>
              Building things<br />
              <span className={styles.titleAccent}>that matter.</span>
            </h1>

            <p className={`${styles.subtitle} reveal reveal-3`}>
              Coming Soon...
            </p>

            <div className={`${styles.cta} reveal reveal-4`}>
              <Link href="/projects" className={styles.btnPrimary}>
                View Projects
                <span className={styles.btnArrow}>→</span>
              </Link>
              <Link href="/about" className={styles.btnGhost}>
                About me
              </Link>
            </div>
          </div>

          {/* Floating grid decoration */}
          <div className={`${styles.gridDeco} reveal reveal-3`} aria-hidden="true">
            <div className={styles.gridLines} />
            <div className={styles.glowOrb} />
          </div>
        </section>

        {/* ── Toronto Skyline ── */}
        <div className={`${styles.skylineWrap} reveal reveal-5`}>
          <TorontoSkyline />
          <div className={styles.skylineFade} />
        </div>

        {/* ── Stats bar ── */}
        <section className={`${styles.stats} reveal reveal-5`}>
          {stats.map(({ value, label }, i) => (
            <>
              {i > 0 && <div key={`div-${i}`} className={styles.statDivider} />}
              <div key={value} className={styles.stat}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            </>
          ))}
        </section>
      </main>
    </>
  );
}