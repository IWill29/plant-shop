// Importē React hookus un komponentes
   import { useState, useEffect } from 'react';
   import Header from './components/Header';
   import LandingPage from './components/LandingPage';
   import Products from './components/Products';
   import Cart from './components/Cart';

   // Galvenā lietotnes komponente
   const App = () => {
     // Stāvoklis, kas seko pašreizējai lapai (landing, products, cart)
     const [page, setPage] = useState(window.location.hash.slice(1) || 'landing');

     // Seko URL hash izmaiņām, lai atjauninātu lapu
     useEffect(() => {
       const handleHashChange = () => {
         setPage(window.location.hash.slice(1) || 'landing');
       };
       window.addEventListener('hashchange', handleHashChange);
       return () => window.removeEventListener('hashchange', handleHashChange); // Notīra klausītāju
     }, []);

     // Renderē atbilstošo komponenti, pamatojoties uz page stāvokli
     return (
       <div className="min-h-screen bg-gray-50">
         {/* Header rādās tikai produktu un groza lapās */}
         {page !== 'landing' && <Header />}
         {/* Nosacīti renderē lapas */}
         {page === 'landing' && <LandingPage />}
         {page === 'products' && <Products />}
         {page === 'cart' && <Cart />}
       </div>
     );
   };

   export default App;