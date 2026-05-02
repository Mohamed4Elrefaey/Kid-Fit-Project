import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        <div className={`${styles.nav} ${isMenuOpen ? styles.navActive : ''}`}>
          <Link to="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Features</Link>
          <Link to="/bmi" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>BMI Calculator</Link>
          <Link to="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>About</Link>
          <div className={styles.mobileActions}>
            <Link to="/" className={styles.loginBtn} onClick={() => setIsMenuOpen(false)}>Log In</Link>
            <Link to="/signup" className={styles.signupBtn} onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
          </div>
        </div>
        <div className={styles.actions}>
          <Link to="/" className={styles.loginBtn}>Log In</Link>
          <Link to="/signup" className={styles.signupBtn}>Sign Up</Link>
        </div>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
