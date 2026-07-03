import styles from './SignUp.module.css';

export default function SignUp() {
  return (
    <section className={styles.signup}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.header}>
            <h1 className={styles.heading}>Create an Account</h1>
            <p className={styles.subheading}>Join Healthy Kids today and start your journey to a better life.</p>
          </div>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>Full Name</label>
              <input type="text" id="name" className={styles.input} placeholder="Enter your name" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input type="email" id="email" className={styles.input} placeholder="Enter your email" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input type="password" id="password" className={styles.input} placeholder="Create a password" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
              <input type="password" id="confirmPassword" className={styles.input} placeholder="Confirm your password" />
            </div>
            <button type="submit" className={styles.submitBtn}>Sign Up</button>
          </form>
          <p className={styles.footerText}>
            Already have an account? <a href="#" className={styles.link}>Log in</a>
          </p>
        </div>
      </div>
    </section>
  );
}
