// Importē fona attēlu
   import backgroundImage from '../assets/background.jpg';

   // Galvenās lapas komponente
   const LandingPage = () => {
     return (
       <div
         className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center p-4"
         style={{ backgroundImage: `url(${backgroundImage})` }} // Iestata fona attēlu
       >
         {/* Caurspīdīgs fons saturam */}
         <div className="bg-black bg-opacity-50 p-8 rounded-lg">
           {/* Kompānijas nosaukums */}
           <h1 className="text-4xl font-bold mb-4">Plant Shop</h1>
           {/* Apraksts par kompāniju */}
           <p className="text-lg max-w-2xl mb-6">
             Laipni lūdzam Plant Shop – jūsu vietā, kur atrast skaistus istabas augus! Mēs piedāvājam dažādus tropiskus, viegli kopjamus un ziedošus augus, lai atdzīvinātu jūsu mājas.
           </p>
           {/* Poga, kas ved uz produktu sarakstu */}
           <a href="#products" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
             Sākt
           </a>
         </div>
       </div>
     );
   };

   export default LandingPage;