import { useState, useEffect } from 'react';
import styles from './BMICalculator.module.css';
import { Zap, CheckCircle2, AlertCircle } from 'lucide-react';

export default function BMICalculator() {
  const [childData, setChildData] = useState({
    name: 'Leo',
    age: 8,
    height: 128,
    weight: 32,
  });

  const [bmiData, setBmiData] = useState(null);

  useEffect(() => {
    calculateBMI();
  }, [childData]);

  const calculateBMI = () => {
    const height = childData.height / 100;
    const bmi = (childData.weight / (height * height)).toFixed(1);

    const percentile = calculatePercentile(childData.age, bmi);

    let status = '';
    let color = '';

    if (percentile < 5) {
      status = 'Underweight';
      color = '#3B82F6';
    } else if (percentile < 85) {
      status = 'Healthy';
      color = '#22C55E';
    } else if (percentile < 95) {
      status = 'Overweight';
      color = '#F59E0B';
    } else {
      status = 'Obese';
      color = '#EF4444';
    }

    setBmiData({
      bmi,
      status,
      color,
      percentile,
      description: getStatusDescription(status),
    });
  };

  const calculatePercentile = (age, bmi) => {
    return Math.min(100, Math.max(0, 50 + (bmi - 19) * 5));
  };

  const getStatusDescription = (status) => {
    const descriptions = {
      Underweight:
        'Your child is below the healthy weight range for their age and gender.',
      Healthy:
        'Your child is at a healthy weight for their age and gender. Great job!',
      Overweight:
        "Your child's BMI is in the 87th percentile for their age and gender.",
      Obese:
        'Your child may need additional support for healthy development.',
    };
    return descriptions[status] || '';
  };

  const nextSteps = [
    {
      icon: <CheckCircle2 size={24} color="#AD2BEE" />,
      title: 'Smart Plate Plan',
      description: 'Meal ideas Leo will love',
    },
    {
      icon: <Zap size={24} color="#AD2BEE" />,
      title: 'Playtime Goal',
      description: 'Daily active game suggestions',
    },
    {
      icon: <AlertCircle size={24} color="#AD2BEE" />,
      title: 'Track Progress',
      description: 'Weekly check-in reminder',
    },
  ];

  return (
    <section className={styles.bmiSection}>
      <div className={styles.container}>
        {/* Header with navigation icons */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.logo}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                  fill="#AD2BEE"
                />
              </svg>
              <span className={styles.logoText}>HealthPath</span>
            </div>
          </div>
          <div className={styles.headerActions}>
            <button className={styles.iconBtn}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 12a8 8 0 0116 0M4 12l1.757-1.757M20 12l-1.757-1.757"
                  stroke="#0F172A"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button className={styles.iconBtn}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 4v16a2 2 0 002 2h12a2 2 0 002-2V4M4 4h16M9 9v8M15 9v8"
                  stroke="#0F172A"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className={styles.content}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            {/* Child Info */}
            <div className={styles.childInfo}>
              <img
                src="https://cdn.codia.ai/figma/t7K2MhnyL2edQQmfjeDLrb/img-6c3cc22f7ba49bb8.png"
                alt={childData.name}
                className={styles.childAvatar}
              />
              <div className={styles.childDetails}>
                <h1 className={styles.childName}>{childData.name}'s BMI Assessment</h1>
                <p className={styles.childMeta}>
                  Age: {childData.age} years • Height: {childData.height}cm
                </p>
              </div>
            </div>

            {/* Status Section */}
            <div className={styles.statusSection}>
              <div className={styles.statusBar} />

              <div className={styles.statusContent}>
                <p className={styles.statusLabel}>CURRENT STATUS</p>
                <h2
                  className={styles.statusText}
                  style={{ color: bmiData?.color || '#0F172A' }}
                >
                  {bmiData?.status || 'Loading...'}
                </h2>
                <p className={styles.statusDescription}>{bmiData?.description}</p>

                {/* BMI Score Circle */}
                <div className={styles.bmiCircleWrapper}>
                  <svg
                    className={styles.bmiCircle}
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                  >
                    <circle
                      cx="100"
                      cy="100"
                      r="95"
                      fill="none"
                      stroke="#E2E8F0"
                      strokeWidth="8"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="95"
                      fill="none"
                      stroke={bmiData?.color || '#AD2BEE'}
                      strokeWidth="8"
                      strokeDasharray={`${(bmiData?.percentile || 50) * 5.97} 597`}
                      strokeLinecap="round"
                      style={{ transition: 'stroke-dasharray 0.3s' }}
                    />
                  </svg>
                  <div className={styles.bmiScoreContent}>
                    <span className={styles.bmiScore}>{bmiData?.bmi || '--'}</span>
                    <span className={styles.bmiLabel}>BMI SCORE</span>
                  </div>
                </div>
              </div>

              {/* BMI Range Chart */}
              <div className={styles.bmiRangeChart}>
                <div className={styles.rangeLabels}>
                  <span>UNDERWEIGHT</span>
                  <span>HEALTHY</span>
                  <span>OVERWEIGHT</span>
                  <span>OBESE</span>
                </div>
                <div className={styles.rangeBar}>
                  <div className={styles.rangeSegment} style={{ flex: 1, background: '#3B82F6' }} />
                  <div className={styles.rangeSegment} style={{ flex: 2, background: '#22C55E' }} />
                  <div className={styles.rangeSegment} style={{ flex: 1, background: '#F59E0B' }} />
                  <div className={styles.rangeSegment} style={{ flex: 1, background: '#EF4444' }} />
                  <div
                    className={styles.rangeIndicator}
                    style={{ left: `${bmiData?.percentile || 50}%` }}
                  />
                </div>
                <div className={styles.rangeNotes}>
                  Comparison based on WHO standardized growth charts
                </div>
              </div>
            </div>

            {/* Educational Section */}
            <div className={styles.educationSection}>
              <div className={styles.educationCard}>
                <div className={styles.educationIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      fill="#AD2BEE"
                    />
                  </svg>
                </div>
                <h4 className={styles.educationTitle}>Parent's Tip</h4>
                <p className={styles.educationText}>
                  Avoid focusing on the numbers. Instead, encourage variety in foods
                  and emphasize how much energy Leo has to play!
                </p>
              </div>

              <div className={styles.educationCard}>
                <div className={styles.educationIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z"
                      fill="#AD2BEE"
                    />
                  </svg>
                </div>
                <h4 className={styles.educationTitle}>Expert Note</h4>
                <p className={styles.educationText}>
                  This tool is for screening only. Please consult with your
                  pediatrician for a comprehensive health evaluation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <aside className={styles.rightColumn}>
            {/* Next Steps Card */}
            <div className={styles.nextStepsCard}>
              <div className={styles.nextStepsHeader}>
                <Zap size={20} color="#AD2BEE" />
                <h3 className={styles.nextStepsTitle}>Next Steps</h3>
              </div>

              <div className={styles.stepsList}>
                {nextSteps.map((step, index) => (
                  <div key={index} className={styles.stepItem}>
                    <div className={styles.stepIcon}>{step.icon}</div>
                    <div className={styles.stepContent}>
                      <h4 className={styles.stepTitle}>{step.title}</h4>
                      <p className={styles.stepDescription}>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className={styles.startPlanBtn}>Start Weekly Plan</button>
            </div>

            {/* Achievement Card */}
            <div className={styles.achievementCard}>
              <p className={styles.achievementText}>
                Let's start a healthy journey together!
              </p>
              <p className={styles.achievementSubtext}>
                Small, fun changes in activity and meals can make a big difference.
                We're here to guide you every step of the way with a plan tailored for
                {childData.name}.
              </p>
              <img
                src="https://cdn.codia.ai/figma/t7K2MhnyL2edQQmfjeDLrb/img-5fb1a36a8e6a47c3.png"
                alt="Happy family"
                className={styles.achievementImage}
              />
              <div className={styles.achievementBadge}>
                Consistency is the secret to success. You've got this!
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
