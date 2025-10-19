// Importē useSelector no react-redux, lai piekļūtu Redux stāvoklim
   import { useSelector } from 'react-redux';

   // Navigācijas joslas komponente
   const Header = () => {
     // Aprēķina kopējo preču skaitu grozā
     const cartCount = useSelector(state =>
       state.cart.reduce((sum, item) => sum + item.quantity, 0)
     );

     return (
       <header className="bg-green-600 text-white p-4 flex justify-between items-center">
         {/* Kompānijas nosaukums */}
         <h1 className="text-xl font-bold">Plant Shop</h1>
         {/* Navigācijas saites */}
         <nav className="flex items-center space-x-4">
           <a href="#products" className="hover:underline">Produkti</a>
           <a href="#cart" className="hover:underline flex items-center">
             {/* Groza ikona */}
             <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
             </svg>
             {/* Preču skaits grozā */}
             <span>({cartCount})</span>
           </a>
         </nav>
       </header>
     );
   };

   export default Header;