// Importē Redux createStore funkciju
   import { createStore } from 'redux';

   // Sākotnējais stāvoklis: tukšs iepirkumu grozs
   const initialState = {
     cart: [], // Masīvs ar groza precēm (id, name, price, thumbnail, quantity)
   };

   // Redux reducētājs, kas apstrādā groza izmaiņas
   const cartReducer = (state = initialState, action) => {
     switch (action.type) {
       case 'ADD_TO_CART': // Pievieno preci grozam
         const existing = state.cart.find(item => item.id === action.payload.id);
         if (existing) {
           // Ja prece jau ir grozā, palielina tās daudzumu
           return {
             ...state,
             cart: state.cart.map(item =>
               item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
             ),
           };
         }
         // Ja prece nav grozā, pievieno to ar daudzumu 1
         return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };

       case 'UPDATE_QUANTITY': // Atjauno preces daudzumu grozā
         return {
           ...state,
           cart: state.cart
             .map(item =>
               item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
             )
             .filter(item => item.quantity > 0), // Izņem preces ar daudzumu 0
         };

       case 'REMOVE_ITEM': // Dzēš preci no groza
         return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };

       default: // Atgriež esošo stāvokli, ja darbība nav atpazīta
         return state;
     }
   };

   // Izveido un eksportē Redux veikalu
   export default createStore(cartReducer);