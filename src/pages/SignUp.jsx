import styles from './SignUp.module.css';

export default function SignUp() {
  return (
    <div className={styles.signupPage}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>Create an Account</h1>
          <p className={styles.subtitle}>Join us and start your healthy journey today!</p>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Create a password" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" placeholder="Confirm your password" />
            </div>
            <button type="submit" className={styles.submitBtn}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
