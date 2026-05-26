import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <div className={styles.logoIcon}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="5" fill="white" />
            </svg>
          </div>
          <span className={styles.logoText}>Healthy Kids</span>
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.nav}>
          <a href="/#features" className={styles.navLink}>Features</a>
          <a href="#" className={styles.navLink}>Plans</a>
          <a href="#" className={styles.navLink}>About</a>
        </div>

        <div className={styles.actions}>
          <Link to="#" className={styles.loginBtn}>Log In</Link>
          <Link to="/signup" className={styles.signupBtn}>Sign Up</Link>
          <button className={styles.mobileMenuBtn} onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileNav} ${isMenuOpen ? styles.active : ''}`}>
        <div className={styles.mobileLinks}>
          <a href="/#features" className={styles.mobileLink} onClick={closeMenu}>Features</a>
          <a href="#" className={styles.mobileLink} onClick={closeMenu}>Plans</a>
          <a href="#" className={styles.mobileLink} onClick={closeMenu}>About</a>
          <div className={styles.mobileActions}>
            <Link to="#" className={styles.mobileLoginBtn} onClick={closeMenu}>Log In</Link>
            <Link to="/signup" className={styles.mobileSignupBtn} onClick={closeMenu}>Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
