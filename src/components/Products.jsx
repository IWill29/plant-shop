// Importē Redux hookus
   import { useDispatch, useSelector } from 'react-redux';

   // Definē augu datus
   const plants = [
     { id: 1, name: 'Monstera', price: 25.0, category: 'Tropiskie', thumbnail: 'https://via.placeholder.com/100?text=Monstera' },
     { id: 2, name: 'Fiddle Leaf Fig', price: 30.0, category: 'Tropiskie', thumbnail: 'https://via.placeholder.com/100?text=Fiddle+Leaf' },
     { id: 3, name: 'Snake Plant', price: 15.0, category: 'Vieglai kopšanai', thumbnail: 'https://via.placeholder.com/100?text=Snake+Plant' },
     { id: 4, name: 'Pothos', price: 10.0, category: 'Vieglai kopšanai', thumbnail: 'https://via.placeholder.com/100?text=Pothos' },
     { id: 5, name: 'ZZ Plant', price: 20.0, category: 'Vieglai kopšanai', thumbnail: 'https://via.placeholder.com/100?text=ZZ+Plant' },
     { id: 6, name: 'Peace Lily', price: 18.0, category: 'Ziedošie', thumbnail: 'https://via.placeholder.com/100?text=Peace+Lily' },
   ];

   // Produktu saraksta komponente
   const Products = () => {
     const dispatch = useDispatch(); // Ļauj nosūtīt darbības uz Redux
     const cart = useSelector(state => state.cart); // Iegūst groza saturu no Redux
     const categories = [...new Set(plants.map(plant => plant.category))]; // Izveido unikālu kategoriju sarakstu

     // Funkcija, kas pievieno preci grozam
     const handleAddToCart = plant => {
       dispatch({ type: 'ADD_TO_CART', payload: plant });
     };

     return (
       <div className="p-4 max-w-6xl mx-auto">
         {/* Lapas virsraksts */}
         <h2 className="text-2xl font-bold mb-4 text-center">Mūsu augi</h2>
         {/* Iterē pa kategorijām */}
         {categories.map(category => (
           <div key={category} className="mb-8">
             {/* Kategorijas nosaukums */}
             <h3 className="text-xl font-semibold mb-4">{category}</h3>
             {/* Režģis ar augiem */}
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
               {plants
                 .filter(plant => plant.category === category) // Filtrē augus pēc kategorijas
                 .map(plant => {
                   const isInCart = cart.some(item => item.id === plant.id); // Pārbauda, vai prece ir grozā
                   return (
                     <div key={plant.id} className="border p-4 rounded-lg text-center shadow-sm">
                       {/* Auga attēls */}
                       <img src={plant.thumbnail} alt={plant.name} className="w-full h-24 object-cover mb-2 rounded" />
                       {/* Auga nosaukums */}
                       <h4 className="text-lg font-semibold">{plant.name}</h4>
                       {/* Auga cena */}
                       <p className="text-gray-600">${plant.price.toFixed(2)}</p>
                       {/* Poga, kas pievieno preci grozam */}
                       <button
                         onClick={() => handleAddToCart(plant)}
                         disabled={isInCart} // Neaktīva, ja prece jau ir grozā
                         className={`mt-2 px-4 py-2 rounded ${
                           isInCart ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'
                         }`}
                       >
                         Pievienot grozam
                       </button>
                     </div>
                   );
                 })}
             </div>
           </div>
         ))}
       </div>
     );
   };

   export default Products;