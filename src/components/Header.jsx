import { useSelector } from 'react-redux';

const Header = () => {
  const cartCount = useSelector(state =>
    state.cart.reduce((sum, item) => sum + item.quantity, 0)
  );
  const currentPage = window.location.hash.slice(1) || 'landing'; // Iegūst pašreizējo lapu

  return (
    <header className="bg-green-600 text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold tracking-wide">Plant Shop</h1>
      <nav className="flex items-center space-x-4">
        {/* "Sākums" poga – redzama tikai uz products un cart lapām */}
        {currentPage !== 'landing' && (
          <a
            href="#landing"
            className="relative inline-flex items-center px-5 py-2 rounded-full bg-white text-green-700 font-semibold shadow hover:bg-green-100 transition"
          >
            <span className="mr-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </span>
            Sākums
          </a>
        )}
        {/* Modern "Produkti" poga */}
        <a
          href="#products"
          className="relative inline-flex items-center px-5 py-2 rounded-full bg-white text-green-700 font-semibold shadow hover:bg-green-100 transition"
        >
          <span className="mr-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
            </svg>
          </span>
          Produkti
        </a>
        {/* Moderns groza ikonas badge */}
        <a href="#cart" className="relative inline-flex items-center px-4 py-2 rounded-full bg-white text-green-700 font-semibold shadow hover:bg-green-100 transition">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {/* Badge ar preču skaitu */}
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 shadow">
              {cartCount}
            </span>
          )}
        </a>
      </nav>
    </header>
  );
};

export default Header;
