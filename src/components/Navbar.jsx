import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        <button
          className={styles.mobileMenuBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <a href="/#features" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Features</a>
          <Link to="/bmi" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>BMI Calculator</Link>
          <a href="#" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>About</a>

          <div className={styles.mobileActions}>
            <a href="#" className={styles.loginBtn} onClick={() => setIsMenuOpen(false)}>Log In</a>
            <Link to="/signup" className={styles.signupBtn} onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
          </div>
        </div>

        <div className={styles.actions}>
          <a href="#" className={styles.loginBtn}>Log In</a>
          <Link to="/signup" className={styles.signupBtn}>Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}
