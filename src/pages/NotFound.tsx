
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-lumi-blue/10 py-16">
        <div className="text-center max-w-lg px-4">
          <h1 className="text-4xl font-bold mb-4 font-heading">404</h1>
          <p className="text-xl text-gray-700 mb-8">
            Oups ! La page que vous recherchez semble introuvable.
          </p>
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-lumi-yellow/50 rounded-full blur-3xl opacity-30"></div>
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80"
              alt="Lampe de luminothérapie" 
              className="rounded-xl shadow-lg w-64 h-64 object-cover mx-auto relative z-10"
            />
          </div>
          <Link 
            to="/" 
            className="btn-primary inline-flex"
          >
            Retourner à l'accueil
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
