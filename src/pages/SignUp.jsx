import styles from './SignUp.module.css';

export default function SignUp() {
  return (
    <div className={styles.signupPage}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>Join Healthy Kids</h1>
          <p className={styles.subtitle}>Start your journey to a healthier lifestyle today.</p>
        </div>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Full Name</label>
            <input type="text" className={styles.input} placeholder="Enter your name" />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Email Address</label>
            <input type="email" className={styles.input} placeholder="name@example.com" />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Password</label>
            <input type="password" className={styles.input} placeholder="Create a password" />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Confirm Password</label>
            <input type="password" className={styles.input} placeholder="Confirm your password" />
          </div>
          <button type="submit" className={styles.submitBtn}>Create Account</button>
        </form>
      </div>
    </div>
  );
}
