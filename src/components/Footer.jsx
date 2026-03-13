import styles from './Footer.module.css';
import { Twitter, Instagram, Facebook } from 'lucide-react';

const resources = ["Our Blog", "Parent Guides", "Activity Library", "Nutrition Tips"];
const company = ["About Us", "Careers", "Press Kit", "Success Stories"];
const legal = ["Privacy Policy", "Terms of Service", "Cookie Policy", "Contact Support"];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logoRow}>
              <div className={styles.logoIcon}>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <circle cx="5.5" cy="5.5" r="4" fill="white" />
                </svg>
              </div>
              <span className={styles.logoText}>Healthy Kids</span>
            </div>
            <p className={styles.tagline}>
              Making health and wellness fun for children through technology and play. Helping families build lasting habits.
            </p>
            <div className={styles.socials}>
              <Twitter size={20} color="#94A3B8" />
              <Instagram size={20} color="#94A3B8" />
              <Facebook size={20} color="#94A3B8" />
            </div>
          </div>

          <div className={styles.links}>
            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>Resources</h4>
              <ul className={styles.linkList}>
                {resources.map((item) => (
                  <li key={item}><a href="#" className={styles.linkItem}>{item}</a></li>
                ))}
              </ul>
            </div>
            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>Company</h4>
              <ul className={styles.linkList}>
                {company.map((item) => (
                  <li key={item}><a href="#" className={styles.linkItem}>{item}</a></li>
                ))}
              </ul>
            </div>
            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>Legal</h4>
              <ul className={styles.linkList}>
                {legal.map((item) => (
                  <li key={item}><a href="#" className={styles.linkItem}>{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <span className={styles.copyright}>
            &copy; 2026 Healthy Kids Happy Life. All rights reserved. Designed with love for the next generation.
          </span>
        </div>
      </div>
    </footer>
  );
}
