
import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-heading font-bold">
              Lumi Nova
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-black font-medium">
              Accueil
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-black font-medium">
              Nos produits
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-black font-medium">
              La luminothérapie
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-black font-medium">
              Contact
            </Link>
          </div>
          
          {/* Shopping Cart */}
          <div className="flex items-center">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <ShoppingCart className="h-5 w-5" />
            </button>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden ml-2">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="p-2 rounded-full hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 animate-fade-in">
            <div className="flex flex-col space-y-4 py-2">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-black font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/products" 
                className="text-gray-700 hover:text-black font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Nos produits
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-black font-medium px-2 py-1" 
                onClick={() => setIsMenuOpen(false)}
              >
                La luminothérapie
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-black font-medium px-2 py-1"
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
