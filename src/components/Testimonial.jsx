import styles from './Testimonial.module.css';
import { Star } from 'lucide-react';

export default function Testimonial() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} size={20} fill="#FACC15" color="#FACC15" />
          ))}
        </div>
        <blockquote className={styles.quote}>
          "Since joining Healthy Kids, my son has become so much more active. He loves earning badges and the workout routines are something we actually enjoy doing together as a family!"
        </blockquote>
        <div className={styles.author}>
          <div className={styles.avatarWrapper}>
            <img
              src="https://cdn.codia.ai/figma/t7K2MhnyL2edQQmfjeDLrb/img-6b8fc41a08d17c79.png"
              alt="Sarah Johnson"
              className={styles.avatar}
            />
          </div>
          <div className={styles.authorInfo}>
            <span className={styles.authorName}>Sarah Johnson</span>
            <span className={styles.authorRole}>Mother of two, London</span>
          </div>
        </div>
      </div>
    </section>
  );
}
