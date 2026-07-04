import styles from './SignUp.module.css';

export default function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className={styles.signupPage}>
      <div className={styles.card}>
        <h1 className={styles.title}>Create Account</h1>
        <p className={styles.subtitle}>Join Healthy Kids and start your journey</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="fullName">Full Name</label>
            <input id="fullName" type="text" className={styles.input} placeholder="Enter your name" required />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">Email Address</label>
            <input id="email" type="email" className={styles.input} placeholder="name@example.com" required />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="password">Password</label>
            <input id="password" type="password" className={styles.input} placeholder="••••••••" required />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="confirmPassword">Confirm Password</label>
            <input id="confirmPassword" type="password" className={styles.input} placeholder="••••••••" required />
          </div>

          <button type="submit" className={styles.submitBtn}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}
