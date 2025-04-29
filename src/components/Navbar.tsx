
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-lumi-peach to-lumi-pink py-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-heading font-bold text-lumi-orange-dark">
              Lumi Nova
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-lumi-orange-dark font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-white/20">
              Accueil
            </Link>
            <Link to="/products" className="text-gray-800 hover:text-lumi-orange-dark font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-white/20">
              Nos produits
            </Link>
            <Link to="/luminotherapie" className="text-gray-800 hover:text-lumi-orange-dark font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-white/20">
              La luminothérapie
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-lumi-orange-dark font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-white/20">
              Contact
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="p-2 rounded-full hover:bg-white/20"
            >
              {isMenuOpen ? <X className="h-6 w-6 text-gray-800" /> : <Menu className="h-6 w-6 text-gray-800" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 animate-fade-in bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
            <div className="flex flex-col space-y-1 py-3">
              <Link 
                to="/" 
                className="text-gray-800 hover:text-lumi-orange-dark font-medium px-4 py-3 hover:bg-lumi-peach/50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/products" 
                className="text-gray-800 hover:text-lumi-orange-dark font-medium px-4 py-3 hover:bg-lumi-peach/50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Nos produits
              </Link>
              <Link 
                to="/luminotherapie" 
                className="text-gray-800 hover:text-lumi-orange-dark font-medium px-4 py-3 hover:bg-lumi-peach/50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                La luminothérapie
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-800 hover:text-lumi-orange-dark font-medium px-4 py-3 hover:bg-lumi-peach/50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
