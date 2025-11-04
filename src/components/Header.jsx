import { useSelector } from 'react-redux';
import styles from './Header.module.css';

const Header = () => {
  const cartCount = useSelector(state =>
    state.cart.reduce((sum, item) => sum + item.quantity, 0)
  );
  const currentPage = window.location.hash.slice(1) || 'landing';

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logo}>
          <div className={styles.circle} aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="#16a34a" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M10 2C7 2 6 4 6 6v8a4 4 0 008 0V6c0-2-1-4-4-4z" />
            </svg>
          </div>
          <h1 className={styles.logoTitle}>Plant Shop</h1>
        </div>

        <nav className={styles.nav} aria-label="Galvenā navigācija">
          {currentPage !== 'landing' && (
            <a href="#landing" className={styles.btn} role="button">Sākums</a>
          )}
          <a href="#products" className={styles.btn}>Produkti</a>
          <a href="#cart" className={`${styles.btn} ${styles.btnSmall} ${styles.badge}`} aria-label="Grozs">
            Grozs
            {cartCount > 0 && <span className={styles.badgeCount} aria-live="polite">{cartCount}</span>}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;