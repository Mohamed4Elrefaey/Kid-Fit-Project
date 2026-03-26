import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';
import styles from './LandingPage.module.css';

export default function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <Hero />
      <Features />
      <Testimonial />
      <CTA />
    </div>
  );
}
