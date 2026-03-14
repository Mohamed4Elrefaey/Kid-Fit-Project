import styles from './Navbar.module.css';

export default function Navbar({ onSignUpClick }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              {/* Child figure */}
              <circle cx="16" cy="8" r="4" fill="#AD2BEE" />
              <path d="M12 14 L20 14 L19 24 L13 24 Z" fill="#AD2BEE" />
              <path d="M12 14 L8 22 M20 14 L24 22" stroke="#AD2BEE" strokeWidth="2" strokeLinecap="round" />
              {/* Heart for health */}
              <path d="M24 18 C24 16 22.5 15 21 15 C19.5 15 18 16 18 18 C18 16 16.5 15 15 15 C13.5 15 12 16 12 18" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <span className={styles.logoText}>KidFit</span>
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
