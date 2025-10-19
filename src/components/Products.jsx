// Importē Redux hookus
   import { useDispatch, useSelector } from 'react-redux';

   // Definē augu datus
   const plants = [
     { id: 1, name: 'Monstera', price: 25.0, category: 'Tropiskie', thumbnail: 'https://florastore.com/cdn/shop/files/1711401_Atmosphere_04_SQ_MJ.jpg?v=1751965762&width=1080' },
     { id: 2, name: 'Fiddle Leaf Fig', price: 30.0, category: 'Tropiskie', thumbnail: 'https://www.palasa.co.in/cdn/shop/articles/IMG_20220226_173034_1.jpg?crop=center&height=2048&v=1694161186&width=2048' },
     { id: 3, name: 'Snake Plant', price: 15.0, category: 'Vieglai kopšanai', thumbnail: 'https://www.houseplant.co.uk/cdn/shop/files/Dracaena_Sansevieria_Trifasciata_Snake_Plant_Tropical_Indoor_Exotic_Variegated_Easy_Houseplant.jpg?v=1737984812' },
     { id: 4, name: 'Pothos', price: 10.0, category: 'Vieglai kopšanai', thumbnail: 'https://www.marthastewart.com/thmb/9etIquryA7k90xAxOOOwAVZMA60=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-2170686151-675aeaba15364e1c876dc485f7e6d8d8.jpg' },
     { id: 5, name: 'ZZ Plant', price: 20.0, category: 'Vieglai kopšanai', thumbnail: 'https://assets.eflorist.com/site/32084100/assets/products/PZM_/sku4760119.jpg?1719850170905' },
     { id: 6, name: 'Peace Lily', price: 18.0, category: 'Ziedošie', thumbnail: 'https://m.media-amazon.com/images/I/518WgiCU3FL.jpg' },
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
                       <img src={plant.thumbnail} alt={plant.name} className="w-full h-40 bg-white object-contain mb-2 rounded-lg border" />
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
