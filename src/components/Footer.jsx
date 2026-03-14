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
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                  {/* Child figure */}
                  <circle cx="16" cy="8" r="4" fill="white" />
                  <path d="M12 14 L20 14 L19 24 L13 24 Z" fill="white" />
                  <path d="M12 14 L8 22 M20 14 L24 22" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  {/* Heart for health */}
                  <path d="M24 18 C24 16 22.5 15 21 15 C19.5 15 18 16 18 18 C18 16 16.5 15 15 15 C13.5 15 12 16 12 18" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className={styles.logoText}>KidFit</span>
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
