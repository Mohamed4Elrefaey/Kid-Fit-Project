import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

        {/* Desktop Nav */}
        <div className={styles.nav}>
          <a href="/#features" className={styles.navLink}>Features</a>
          <Link to="/bmi" className={styles.navLink}>BMI Calculator</Link>
          <a href="/#about" className={styles.navLink}>About</a>
        </div>

        <div className={styles.actions}>
          <a href="#" className={styles.loginBtn}>Log In</a>
          <Link to="/signup" className={styles.signupBtn}>Sign Up</Link>
        </div>

        {/* Mobile Toggle */}
        <button className={styles.menuToggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <a href="/#features" className={styles.navLink} onClick={() => setIsOpen(false)}>Features</a>
          <Link to="/bmi" className={styles.navLink} onClick={() => setIsOpen(false)}>BMI Calculator</Link>
          <a href="/#about" className={styles.navLink} onClick={() => setIsOpen(false)}>About</a>
          <div className={styles.mobileActions}>
            <a href="#" className={styles.loginBtn}>Log In</a>
            <Link to="/signup" className={styles.signupBtn} onClick={() => setIsOpen(false)}>Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
