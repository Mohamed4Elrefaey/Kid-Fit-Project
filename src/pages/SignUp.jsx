import styles from './SignUp.module.css';

export default function SignUp() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.formCard}>
          <h1 className={styles.title}>Create an Account</h1>
          <p className={styles.subtitle}>Join us and start your child's healthy journey today.</p>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>Full Name</label>
              <input type="text" id="name" className={styles.input} placeholder="Enter your full name" />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input type="email" id="email" className={styles.input} placeholder="name@example.com" />
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
            Already have an account? <a href="#" className={styles.link}>Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
}
