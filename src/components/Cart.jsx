// Importē Redux hookus
   import { useDispatch, useSelector } from 'react-redux';

   // Iepirkumu groza komponente
   const Cart = () => {
     const dispatch = useDispatch(); // Ļauj nosūtīt darbības uz Redux
     const cart = useSelector(state => state.cart); // Iegūst groza saturu no Redux
     // Aprēķina kopējo preču skaitu
     const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
     // Aprēķina kopējo summu
     const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

     // Palielina preces daudzumu
     const handleIncrement = id => {
       dispatch({
         type: 'UPDATE_QUANTITY',
         payload: { id, quantity: cart.find(item => item.id === id).quantity + 1 },
       });
     };

     // Samazina preces daudzumu
     const handleDecrement = id => {
       dispatch({
         type: 'UPDATE_QUANTITY',
         payload: { id, quantity: cart.find(item => item.id === id).quantity - 1 },
       });
     };

     // Dzēš preci no groza
     const handleRemove = id => {
       dispatch({ type: 'REMOVE_ITEM', payload: id });
     };

     return (
       <div className="p-4 max-w-6xl mx-auto">
         {/* Lapas virsraksts */}
         <h2 className="text-2xl font-bold mb-4 text-center">Iepirkumu grozs</h2>
         {/* Kopējais preču skaits */}
         <p className="text-lg mb-2">Kopējais preču skaits: {cartCount}</p>
         {/* Kopējā summa */}
         <p className="text-lg mb-4">Kopējā summa: ${totalCost.toFixed(2)}</p>
         {/* Pārbauda, vai grozs ir tukšs */}
         {cart.length === 0 ? (
           <p className="text-center text-gray-600">Jūsu grozs ir tukšs.</p>
         ) : (
           <div className="space-y-4">
             {/* Iterē pa groza precēm */}
             {cart.map(item => (
               <div key={item.id} className="flex items-center border p-4 rounded-lg shadow-sm">
                 {/* Preces attēls */}
                 <img src={item.thumbnail} alt={item.name} className="w-16 h-16 object-cover mr-4 rounded" />
                 <div className="flex-1">
                   {/* Preces nosaukums */}
                   <h4 className="text-lg font-semibold">{item.name}</h4>
                   {/* Vienības cena */}
                   <p className="text-gray-600">Vienības cena: ${item.price.toFixed(2)}</p>
                   {/* Daudzums */}
                   <p className="text-gray-600">Daudzums: {item.quantity}</p>
                 </div>
                 {/* Pogas preces pārvaldībai */}
                 <div className="flex space-x-2">
                   <button
                     onClick={() => handleIncrement(item.id)}
                     className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                   >
                     +
                   </button>
                   <button
                     onClick={() => handleDecrement(item.id)}
                     className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                   >
                     -
                   </button>
                   <button
                     onClick={() => handleRemove(item.id)}
                     className="bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-700"
                   >
                     Dzēst
                   </button>
                 </div>
               </div>
             ))}
           </div>
         )}
         {/* Navigācijas pogas */}
         <div className="mt-6 flex justify-between">
           <a href="#products" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
             Turpināt iepirkties
           </a>
           <button
             onClick={() => alert('Drīzumā būs pieejams!')}
             className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
           >
             Apmaksāt
           </button>
         </div>
       </div>
     );
   };

   export default Cart;