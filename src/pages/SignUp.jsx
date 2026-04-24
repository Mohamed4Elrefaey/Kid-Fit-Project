import styles from './SignUp.module.css';

export default function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic
  };

  return (
    <div className={styles.signup}>
      <div className={styles.container}>
        <h1 className={styles.title}>Create Account</h1>
        <p className={styles.subtitle}>Join our community of healthy families</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>Full Name</label>
            <input
              type="text"
              id="name"
              className={styles.input}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <input
              type="email"
              id="email"
              className={styles.input}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              className={styles.input}
              placeholder="Create a password"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className={styles.input}
              placeholder="Confirm your password"
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
