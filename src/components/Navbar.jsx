import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="5" fill="white" />
            </svg>
          </div>
          <span className={styles.logoText}>Healthy Kids</span>
        </Link>

        <div className={`${styles.nav} ${navOpen ? styles.navOpen : ''}`}>
          <a href="/#features" className={styles.navLink} onClick={() => setNavOpen(false)}>Features</a>
          <Link to="/bmi" className={styles.navLink} onClick={() => setNavOpen(false)}>BMI Calculator</Link>
          <a href="#" className={styles.navLink} onClick={() => setNavOpen(false)}>Plans</a>
          <a href="#" className={styles.navLink} onClick={() => setNavOpen(false)}>About</a>
          <div className={styles.mobileActions}>
            <a href="#" className={styles.loginBtn}>Log In</a>
            <Link to="/signup" className={styles.signupBtn} onClick={() => setNavOpen(false)}>Sign Up</Link>
          </div>
        </div>

        <div className={styles.actions}>
          <a href="#" className={styles.loginBtn}>Log In</a>
          <Link to="/signup" className={styles.signupBtn}>Sign Up</Link>
        </div>

        <button className={styles.menuBtn} onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
