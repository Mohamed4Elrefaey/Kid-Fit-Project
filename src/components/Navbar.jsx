import styles from './Navbar.module.css';

export default function Navbar({ onSignUpClick }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="5" fill="white" />
            </svg>
          </div>
          <span className={styles.logoText}>Healthy Kids</span>
        </div>
        <div className={styles.nav}>
          <a href="#" className={styles.navLink}>Features</a>
          <a href="#" className={styles.navLink}>Plans</a>
          <a href="#" className={styles.navLink}>About</a>
        </div>
        <div className={styles.actions}>
          <a href="#" className={styles.loginBtn}>Log In</a>
          <button 
            onClick={(e) => {
              e.preventDefault();
              if (onSignUpClick) onSignUpClick();
            }}
            className={styles.signupBtn}
            style={{ border: 'none', background: 'inherit', cursor: 'pointer', padding: 0 }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
