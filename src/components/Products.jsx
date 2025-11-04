import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import styles from './Products.module.css';

// Definē augu datus (var vēlāk pārvietot uz atsevišķu datu failu / API)
const plants = [
  { id: 1, name: 'Monstera', price: 25.0, category: 'Tropiskie', thumbnail: 'https://florastore.com/cdn/shop/files/1711401_Atmosphere_04_SQ_MJ.jpg?v=1751965762&width=1080' },
  { id: 2, name: 'Fiddle Leaf Fig', price: 30.0, category: 'Tropiskie', thumbnail: 'https://www.palasa.co.in/cdn/shop/articles/IMG_20220226_173034_1.jpg?crop=center&height=2048&v=1694161186&width=2048' },
  { id: 3, name: 'Snake Plant', price: 15.0, category: 'Vieglai kopšanai', thumbnail: 'data:image/jpeg;base64,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' },
  { id: 4, name: 'Pothos', price: 10.0, category: 'Vieglai kopšanai', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8WjfgaYdP5XztO5xsu_bDtefWGTsqmMagNzONAIwAqjwz1Q3BaYlVquNO0Pf9zrwZUPFflPr_8XRj4m3xyjhkhFipK2nIaodgM6PuOw&s=10' },
  { id: 5, name: 'ZZ Plant', price: 20.0, category: 'Vieglai kopšanai', thumbnail: 'https://assets.eflorist.com/site/32084100/assets/products/PZM_/sku4760119.jpg?1719850170905' },
  { id: 6, name: 'Peace Lily', price: 18.0, category: 'Ziedošie', thumbnail: 'https://m.media-amazon.com/images/I/518WgiCU3FL.jpg' },
];

const Products = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart || []);
  const categories = ['Visi', ...[...new Set(plants.map(p => p.category))]];

  const [activeCategory, setActiveCategory] = useState('Visi');
  const [search, setSearch] = useState('');

  const handleAddToCart = plant => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...plant, quantity: 1 } });
  };

  const visiblePlants = plants
    .filter(p => (activeCategory === 'Visi' ? true : p.category === activeCategory))
    .filter(p => p.name.toLowerCase().includes(search.trim().toLowerCase()));

  return (
    <section className={styles.wrapper} aria-labelledby="products-heading">
      {/* Use global .container to align search, categories and buttons with the rest of site */}
      <div className="container">
        <div className={styles.productsHeader}>
          <h2 id="products-heading" className={styles.h2}>Mūsu augi</h2>

          <div className={styles.searchWrap}>
            <label htmlFor="plant-search" className="visuallyHidden">Meklēt augus</label>
            <input
              id="plant-search"
              type="search"
              placeholder="Meklēt augus..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className={styles.search}
              aria-label="Meklēt augus"
            />
          </div>
        </div>

        <div className={styles.categories} role="tablist" aria-label="Kategorijas">
          {categories.map(cat => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={isActive ? styles.categoryPillActive : styles.categoryPill}
                role="tab"
                aria-selected={isActive}
                aria-pressed={isActive}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className={styles.grid} role="list" aria-live="polite">
          {visiblePlants.length === 0 ? (
            <div className={styles.noResults}>Nav atrasts neviens augs pēc jūsu kritērijiem.</div>
          ) : (
            visiblePlants.map(plant => {
              const isInCart = cart.some(item => item.id === plant.id);
              return (
                <article key={plant.id} className={styles.card} role="listitem" aria-label={plant.name}>
                  <div className={styles.cardImage} aria-hidden="true">
                    <img src={plant.thumbnail} alt={plant.name} loading="lazy" />
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.cardTitleRow}>
                      <h3 className={styles.cardTitle}>{plant.name}</h3>
                      <span className={styles.price}>${plant.price.toFixed(2)}</span>
                    </div>

                    <p className={styles.muted}>{plant.category}</p>

                    <div className={styles.cardActions}>
                      <button
                        onClick={() => handleAddToCart(plant)}
                        disabled={isInCart}
                        className={isInCart ? styles.btnSecondary : styles.btnPrimary}
                        aria-label={isInCart ? `${plant.name} jau grozā` : `Pievienot grozam ${plant.name}`}
                      >
                        {isInCart ? 'Jau grozā' : 'Pievienot grozam'}
                      </button>

                      <a href={`#products`} className={`${styles.btn} ${styles.btnSecondary}`} aria-label={`Skatīt ${plant.name}`}>
                        Skatīt
                      </a>
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;