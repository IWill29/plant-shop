import styles from './LandingPage.module.css';
import backgroundImage from '../assets/background.jpg.png';

/* Updated LandingPage: removed plain emoji, added small inline SVG icons for features,
   adjusted text color and panel background so everything reads on top of background image. */

const IconLeaf = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21s6-9 18-12c0 0-6 9-18 12z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 7c-2 2-6 2-10 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconTruck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 3h13v13H1z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 8h5l4 4v4h-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="6" cy="19" r="1.5" fill="currentColor" />
    <circle cx="18" cy="19" r="1.5" fill="currentColor" />
  </svg>
);

const IconLock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LandingPage = () => {
  return (
    <div
      className={styles.landing}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      role="region"
      aria-label="Sākumlapa"
    >
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.panel}>
        <h1 className={styles.h1}>Plant Shop</h1>

        <p className={styles.p}>
          Laipni lūdzam Plant Shop — izvēlies skaistus un viegli kopjamus istabas augus, kas piešķirs jūsu mājai dzīvību.
        </p>

        <div className={styles.ctaRow}>
          <a href="#products" className={styles.btnPrimary}>Sākt iepirkties</a>
        </div>

        <div className={styles.features} role="list" aria-label="Mūsu priekšrocības">
          <div className={styles.feature} role="listitem">
            <div className={styles.featureIcon} aria-hidden="true"><IconLeaf /></div>
            <div>
              <div className={styles.featureLabel}>Kvalitatīvi augi</div>
              <div className={styles.featureSub}>Rūpīgi atlasīti</div>
            </div>
          </div>

          <div className={styles.feature} role="listitem">
            <div className={styles.featureIcon} aria-hidden="true"><IconTruck /></div>
            <div>
              <div className={styles.featureLabel}>Ātra piegāde</div>
              <div className={styles.featureSub}>Droši un laicīgi</div>
            </div>
          </div>

          <div className={styles.feature} role="listitem">
            <div className={styles.featureIcon} aria-hidden="true"><IconLock /></div>
            <div>
              <div className={styles.featureLabel}>Droša apmaksa</div>
              <div className={styles.featureSub}>SSL un kredītkaršu aizsardzība</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;