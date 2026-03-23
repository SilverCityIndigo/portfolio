import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';

const links = [
  { href: '/',         label: 'Home'     },
  { href: '/about',    label: 'About'    },
  { href: '/projects', label: 'Projects' },
  { href: '/chess',    label: 'Chess'    },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [router.pathname]);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          YH<span className={styles.dot}>_</span>
        </Link>

        <ul className={styles.links}>
          {links.map(({ href, label }) => {
            const active = router.pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`${styles.link} ${active ? styles.active : ''}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`${styles.drawerLink} ${router.pathname === href ? styles.drawerActive : ''}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}