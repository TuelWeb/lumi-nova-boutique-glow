
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProduct = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-lumi-blue/20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <h2 className="text-center heading-md mb-12">Notre produit phare</h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-8 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80" 
              alt="Lampe Caxalux 10 000" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="lg:w-1/2 p-8 lg:p-10">
            <h3 className="heading-sm">Lampe Caxalux 10 000</h3>
            <div className="flex items-center mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">4.8/5 (120 avis)</span>
            </div>
            
            <div className="bg-lumi-yellow/30 px-4 py-2 rounded-lg mb-6 inline-block">
              <span className="text-lg font-semibold">129,00 €</span>
            </div>
            
            <p className="text-gray-700 mb-6">
              Notre lampe de luminothérapie la plus vendue, la Caxalux 10 000 offre une intensité lumineuse de 10 000 lux. 
              Son design élégant et son efficacité prouvée en font le choix idéal pour combattre le blues hivernal et retrouver 
              votre énergie naturelle.
            </p>
            
            <ul className="mb-8 space-y-2">
              <li className="flex items-center text-gray-700">
                <svg className="h-4 w-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Intensité de 10 000 lux
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="h-4 w-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Surface d'exposition optimale
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="h-4 w-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Technologie LED sans UV
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="h-4 w-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                3 niveaux d'intensité
              </li>
            </ul>
            
            <div className="flex space-x-4">
              <button className="btn-primary">
                Ajouter au panier
              </button>
              <Link to="/products/caxalux-10000" className="flex items-center text-gray-700 hover:text-black font-medium">
                En savoir plus
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
