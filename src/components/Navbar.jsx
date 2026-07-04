import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={closeNav}>
          <div className={styles.logoIcon}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="5" fill="white" />
            </svg>
          </div>
          <span className={styles.logoText}>Healthy Kids</span>
        </Link>

        <button className={styles.mobileToggle} onClick={toggleNav}>
          {navOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`${styles.nav} ${navOpen ? styles.navOpen : ''}`}>
          <a href="/#features" className={styles.navLink} onClick={closeNav}>Features</a>
          <Link to="/bmi" className={styles.navLink} onClick={closeNav}>BMI Calculator</Link>
          <a href="#" className={styles.navLink} onClick={closeNav}>About</a>
          <div className={styles.mobileActions}>
            <Link to="#" className={styles.loginBtn} onClick={closeNav}>Log In</Link>
            <Link to="/signup" className={styles.signupBtn} onClick={closeNav}>Sign Up</Link>
          </div>
        </div>

        <div className={styles.actions}>
          <Link to="#" className={styles.loginBtn}>Log In</Link>
          <Link to="/signup" className={styles.signupBtn}>Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}
