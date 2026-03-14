import { useState } from 'react';
import styles from './SignUp.module.css';
import { Shield, User, AlertCircle } from 'lucide-react';

export default function SignUp({ onSignUpComplete }) {
  const [formData, setFormData] = useState({
    parentEmail: '',
    password: '',
    confirmPassword: '',
    childName: '',
    childAge: '',
    gender: 'boy',
    height: '',
    weight: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.parentEmail) {
      newErrors.parentEmail = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.parentEmail)) {
      newErrors.parentEmail = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.childName.trim()) {
      newErrors.childName = 'Child\'s name is required';
    }

    if (!formData.childAge || formData.childAge < 1 || formData.childAge > 18) {
      newErrors.childAge = 'Please enter a valid age (1-18)';
    }

    if (!formData.height || formData.height < 50 || formData.height > 250) {
      newErrors.height = 'Please enter a valid height in cm';
    }

    if (!formData.weight || formData.weight < 5 || formData.weight > 150) {
      newErrors.weight = 'Please enter a valid weight in kg';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleGenderChange = (selectedGender) => {
    setFormData((prev) => ({
      ...prev,
      gender: selectedGender,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      
      // Prepare user data for BMI Calculator
      const dataForBMI = {
        parentEmail: formData.parentEmail,
        childName: formData.childName,
        childAge: parseInt(formData.childAge),
        gender: formData.gender,
        height: parseInt(formData.height),
        weight: parseInt(formData.weight),
      };

      // Call the callback after a short delay to show the success state
      setTimeout(() => {
        if (onSignUpComplete) {
          onSignUpComplete(dataForBMI);
        }
      }, 500);
    }
  };

  return (
    <section className={styles.signupSection}>
      <div className={styles.signupContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Join the Fun! <span className={styles.emoji}>🎈</span>
          </h1>
          <p className={styles.subtitle}>
            Let's set up your family's health adventure profile.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Parent Information Section */}
          <div className={styles.formSection}>
            <div className={styles.sectionHeader}>
              <Shield size={24} color="#AD2BEE" />
              <h2 className={styles.sectionTitle}>Parent Information</h2>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="parentEmail" className={styles.label}>
                Email Address
              </label>
              <input
                type="email"
                id="parentEmail"
                name="parentEmail"
                value={formData.parentEmail}
                onChange={handleChange}
                placeholder="parent@example.com"
                className={`${styles.input} ${
                  errors.parentEmail ? styles.inputError : ''
                }`}
              />
              {errors.parentEmail && (
                <span className={styles.errorMessage}>{errors.parentEmail}</span>
              )}
            </div>

            <div className={styles.passwordRow}>
              <div className={styles.formGroup}>
                <label htmlFor="password" className={styles.label}>
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create password"
                  className={`${styles.input} ${
                    errors.password ? styles.inputError : ''
                  }`}
                />
                {errors.password && (
                  <span className={styles.errorMessage}>
                    {errors.password}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="confirmPassword" className={styles.label}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Repeat password"
                  className={`${styles.input} ${
                    errors.confirmPassword ? styles.inputError : ''
                  }`}
                />
                {errors.confirmPassword && (
                  <span className={styles.errorMessage}>
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Child's Profile Section */}
          <div className={styles.formSection}>
            <div className={styles.sectionHeader}>
              <User size={24} color="#AD2BEE" />
              <h2 className={styles.sectionTitle}>Child's Profile</h2>
            </div>

            <div className={styles.childProfileRow}>
              <div className={styles.formGroup}>
                <label htmlFor="childName" className={styles.label}>
                  Child's Name
                </label>
                <input
                  type="text"
                  id="childName"
                  name="childName"
                  value={formData.childName}
                  onChange={handleChange}
                  placeholder="Super Kid Name"
                  className={`${styles.input} ${
                    errors.childName ? styles.inputError : ''
                  }`}
                />
                {errors.childName && (
                  <span className={styles.errorMessage}>
                    {errors.childName}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="childAge" className={styles.label}>
                  Age
                </label>
                <input
                  type="number"
                  id="childAge"
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleChange}
                  placeholder="Years"
                  className={`${styles.input} ${
                    errors.childAge ? styles.inputError : ''
                  }`}
                />
                {errors.childAge && (
                  <span className={styles.errorMessage}>
                    {errors.childAge}
                  </span>
                )}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Gender Identity</label>
              <div className={styles.genderOptions}>
                {['boy', 'girl', 'other'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleGenderChange(option)}
                    className={`${styles.genderBtn} ${
                      formData.gender === option ? styles.genderBtnActive : ''
                    }`}
                  >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.measurementRow}>
              <div className={styles.formGroup}>
                <label htmlFor="height" className={styles.label}>
                  Height (cm)
                </label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  placeholder="120"
                  className={`${styles.input} ${
                    errors.height ? styles.inputError : ''
                  }`}
                />
                {errors.height && (
                  <span className={styles.errorMessage}>{errors.height}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="weight" className={styles.label}>
                  Weight (kg)
                </label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  placeholder="25"
                  className={`${styles.input} ${
                    errors.weight ? styles.inputError : ''
                  }`}
                />
                {errors.weight && (
                  <span className={styles.errorMessage}>{errors.weight}</span>
                )}
              </div>
            </div>
          </div>

          {/* BMI Information Box */}
          <div className={styles.infoBox}>
            <div className={styles.infoBoxHeader}>
              <AlertCircle size={20} color="#AD2BEE" />
              <span className={styles.infoBoxTitle}>BMI Calculation</span>
            </div>
            <p className={styles.infoBoxText}>
              We'll use these measurements to calculate your child's Body Mass Index
              (BMI) and provide personalized health milestones. 💫
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`${styles.submitBtn} ${
              submitted ? styles.submitBtnSuccess : ''
            }`}
            disabled={submitted}
          >
            {submitted ? 'Account Created!' : 'Create Account →'}
          </button>

          {/* Terms */}
          <p className={styles.termsText}>
            By signing up, you agree to our{' '}
            <a href="#" className={styles.termsLink}>
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className={styles.termsLink}>
              Privacy Policy
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
