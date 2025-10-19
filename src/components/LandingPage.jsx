import backgroundImage from "../assets/background.png";

const LandingPage = () => {
  return (
    <div
      className="w-screen min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white text-center p-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-4xl w-full mx-4 text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Plant Shop</h1>
        <p className="text-lg max-w-2xl mb-6">
          Laipni lūdzam Plant Shop – jūsu vietā, kur atrast skaistus istabas augus! Mēs piedāvājam dažādus tropiskus, viegli kopjamus un ziedošus augus, lai atdzīvinātu jūsu mājas.
        </p>
        <a href="#products" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
          Sākt
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
