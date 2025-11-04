import { useDispatch, useSelector } from 'react-redux';
import styles from './Cart.module.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart || []);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleIncrement = id => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, quantity: cart.find(item => item.id === id).quantity + 1 },
    });
  };

  const handleDecrement = id => {
    const current = cart.find(item => item.id === id);
    if (!current) return;
    const nextQty = current.quantity - 1;
    if (nextQty <= 0) {
      dispatch({ type: 'REMOVE_ITEM', payload: id });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: nextQty } });
    }
  };

  const handleRemove = id => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  // Allow typed quantity change (sanitised)
  const handleQtyChange = (id, value) => {
    const qty = Math.max(1, Number(value) || 1);
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: qty } });
  };

  return (
    <main className={styles.container}>
      {/* Simplified hero header with plain text stats */}
      <div className={styles.heroHeader} role="region" aria-label="Grozs informācija">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div className={styles.heroAccent} aria-hidden="true" />
          <div>
            <h2 className={styles.heroTitle}>Iepirkumu grozs</h2>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <section className={styles.cartList} aria-live="polite" aria-label="Grozs — preces">
          {cart.length === 0 ? (
            <div className={styles.empty}>
              <p style={{ margin: 0, fontWeight: 700 }}>Grozs ir tukšs</p>
              <p style={{ marginTop: 8, color: '#6b7280' }}>Pievieno augus no sadaļas Produkti</p>
            </div>
          ) : (
            cart.map(item => (
              <article key={item.id} className={styles.cartItem} aria-label={item.name}>
                <img src={item.thumbnail} alt={item.name} className={styles.itemImage} />

                <div className={styles.cartInfo}>
                  <h4 className={styles.itemName}>{item.name}</h4>

                  <div className={styles.itemMeta}>
                    <span className={styles.muted}>Vienības cena: ${item.price.toFixed(2)}</span>
                    <span className={styles.itemSubtotal}>Subtotal: ${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>

                <div className={styles.controls} role="group" aria-label={`Kontroles priekš ${item.name}`}>
                  <div className={styles.stepper} aria-hidden="false">
                    <button
                      className={styles.stepBtn}
                      onClick={() => handleDecrement(item.id)}
                      aria-label={`Samazināt daudzumu ${item.name}`}
                    >
                      −
                    </button>
                    <input
                      className={styles.stepInput}
                      type="number"
                      inputMode="numeric"
                      min="1"
                      value={item.quantity}
                      onChange={e => handleQtyChange(item.id, e.target.value)}
                      aria-label={`Daudzums ${item.name}`}
                    />
                    <button
                      className={styles.stepBtn}
                      onClick={() => handleIncrement(item.id)}
                      aria-label={`Palielināt daudzumu ${item.name}`}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className={styles.removeBtn}
                    onClick={() => handleRemove(item.id)}
                    aria-label={`Noņemt ${item.name} no groza`}
                    title="Noņemt"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M3 6h18" stroke="#ef4444" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 6v12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6" stroke="#ef4444" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 11v6" stroke="#ef4444" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 11v6" stroke="#ef4444" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 6l1-2h4l1 2" stroke="#ef4444" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </article>
            ))
          )}
        </section>

        <aside className={styles.summaryBox} aria-label="Grozs — kopsavilkums">
          <div>
            <div className={styles.summaryRow}>
              <span className={styles.totalLabel}>Preču skaits</span>
              <span className={styles.totalValue}>{cartCount}</span>
            </div>

            <div className={styles.summaryRow}>
              <span className={styles.totalLabel}>Kopā</span>
              <span className={styles.totalValue}>${totalCost.toFixed(2)}</span>
            </div>
          </div>

          <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
            <a href="#products" className={`${styles.btn} ${styles.btnGhost}`} aria-label="Turpināt iepirkties">Turpināt iepirkties</a>
            <button
              className={`${styles.btn} ${styles.btnPrimary}`}
              onClick={() => alert('Drīzumā būs pieejams!')}
              aria-label="Apmaksāt"
            >
              Apmaksāt — ${totalCost.toFixed(2)}
            </button>
          </div>

          <div style={{ marginTop: 12, fontSize: 12, color: '#6b7280' }}>
            Bezmaksas atgriešana 14 dienu laikā • Droša apmaksa
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Cart;