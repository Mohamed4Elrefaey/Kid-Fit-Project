import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

        {/* Desktop Nav */}
        <div className={styles.nav}>
          <Link to="/" className={styles.navLink}>Features</Link>
          <Link to="/bmi" className={styles.navLink}>BMI Calculator</Link>
          <Link to="/" className={styles.navLink}>About</Link>
        </div>

        <div className={styles.actions}>
          <Link to="/login" className={styles.loginBtn}>Log In</Link>
          <Link to="/signup" className={styles.signupBtn}>Sign Up</Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <Link to="/" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Features</Link>
          <Link to="/bmi" className={styles.mobileLink} onClick={() => setIsOpen(false)}>BMI Calculator</Link>
          <Link to="/" className={styles.mobileLink} onClick={() => setIsOpen(false)}>About</Link>
          <div className={styles.mobileActions}>
            <Link to="/login" className={styles.mobileLoginBtn} onClick={() => setIsOpen(false)}>Log In</Link>
            <Link to="/signup" className={styles.mobileSignupBtn} onClick={() => setIsOpen(false)}>Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
