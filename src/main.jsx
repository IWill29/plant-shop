// Importē React un ReactDOM
   import React from 'react';
   import ReactDOM from 'react-dom/client';
   // Importē Redux Provider un veikalu
   import { Provider } from 'react-redux';
   import store from './store';
   // Importē galveno komponenti un stilus
   import App from './App';
   import './index.css';

   // Renderē lietotni ar Redux veikalu
   ReactDOM.createRoot(document.getElementById('root')).render(
     <Provider store={store}>
       <App />
     </Provider>
   );