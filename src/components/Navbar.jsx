import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={() => setIsOpen(false)}>
          <div className={styles.logoIcon}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="5" fill="white" />
            </svg>
          </div>
          <span className={styles.logoText}>Healthy Kids</span>
        </Link>

        <button className={styles.mobileToggle} onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`${styles.nav} ${isOpen ? styles.navActive : ''}`}>
          <a href="/#features" className={styles.navLink} onClick={() => setIsOpen(false)}>Features</a>
          <Link to="/bmi" className={styles.navLink} onClick={() => setIsOpen(false)}>BMI Calculator</Link>
          <a href="/#about" className={styles.navLink} onClick={() => setIsOpen(false)}>About</a>
          <div className={styles.mobileActions}>
            <Link to="/login" className={styles.loginBtn} onClick={() => setIsOpen(false)}>Log In</Link>
            <Link to="/signup" className={styles.signupBtn} onClick={() => setIsOpen(false)}>Sign Up</Link>
          </div>
        </div>

        <div className={styles.actions}>
          <Link to="/login" className={styles.loginBtn}>Log In</Link>
          <Link to="/signup" className={styles.signupBtn}>Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}
