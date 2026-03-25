import { Link } from 'react-router-dom';
import styles from './Features.module.css';
import { Activity, ClipboardList, Gamepad2, TrendingUp, Trophy, Bot } from 'lucide-react';

const features = [
  {
    icon: <Activity size={22} color="#AD2BEE" />,
    title: "BMI Health Check",
    description: "Easy, child-friendly tracking of growth and essential health metrics over time.",
    image: "https://cdn.codia.ai/figma/t7K2MhnyL2edQQmfjeDLrb/img-960311422bd2113e.png",
    link: "/bmi"
  },
  {
    icon: <ClipboardList size={24} color="#AD2BEE" />,
    title: "Personalized Plans",
    description: "Exercise routines tailored specifically to your child's age, ability, and interests.",
    image: "https://cdn.codia.ai/figma/t7K2MhnyL2edQQmfjeDLrb/img-6b5f60bb59d1ccf3.png",
  },
  {
    icon: <Gamepad2 size={24} color="#AD2BEE" />,
    title: "Fun Activities",
    description: "Gamified experiences and engaging outdoor challenges that keep kids moving.",
    image: "https://cdn.codia.ai/figma/t7K2MhnyL2edQQmfjeDLrb/img-d23e0bbfb496a663.png",
  },
  {
    icon: <TrendingUp size={24} color="#AD2BEE" />,
    title: "Progress Tracking",
    description: "Visualize improvements with colorful charts and celebrate milestones together.",
    image: "https://cdn.codia.ai/figma/t7K2MhnyL2edQQmfjeDLrb/img-3dd8cbe3310c9691.png",
  },
  {
    icon: <Trophy size={24} color="#AD2BEE" />,
    title: "Earn Rewards",
    description: "Stay motivated with digital badges, virtual trophies, and real-world prizes.",
    image: "https://cdn.codia.ai/figma/t7K2MhnyL2edQQmfjeDLrb/img-f17dc9e6946a441e.png",
  },
  {
    icon: <Bot size={24} color="#AD2BEE" />,
    title: "AI Chatbot",
    description: "A friendly digital companion available 24/7 to answer health and exercise questions.",
    image: "https://cdn.codia.ai/figma/t7K2MhnyL2edQQmfjeDLrb/img-fc02535f20ba2729.png",
  },
];

export default function Features() {
  return (
    <section className={styles.features} id="features">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Everything Your Child Needs to Thrive</h2>
          <p className={styles.subheading}>
            Our comprehensive platform makes health fun and engaging for kids while
            giving parents peace of mind.
          </p>
        </div>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  {feature.link ? (
                    <Link to={feature.link} className={styles.featureLink}>{feature.title}</Link>
                  ) : (
                    feature.title
                  )}
                </h3>
                <p className={styles.cardDescription}>{feature.description}</p>
              </div>
              <img
                src={feature.image}
                alt={feature.title}
                className={styles.cardImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
