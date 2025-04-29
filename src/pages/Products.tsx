
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  intensity: number;
  description: string;
  rating: number;
  reviewCount: number;
};

const products: Product[] = [
  {
    id: "caxalux-10000",
    name: "Lampe Caxalux 10 000",
    price: 129,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80",
    intensity: 10000,
    description: "Notre lampe la plus vendue, idéale pour retrouver énergie et vitalité pendant l'hiver.",
    rating: 4.8,
    reviewCount: 120
  },
  {
    id: "lumino-portable",
    name: "Lumino Portable",
    price: 89,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    intensity: 5000,
    description: "Lampe compacte de voyage, parfaite pour garder votre énergie en déplacement.",
    rating: 4.5,
    reviewCount: 78
  },
  {
    id: "sunray-max",
    name: "Sunray Max",
    price: 169,
    image: "https://images.unsplash.com/photo-1621535542353-6b60132aec2c?auto=format&fit=crop&q=80",
    intensity: 15000,
    description: "Notre modèle premium avec intensité maximale pour un effet rapide et puissant.",
    rating: 4.9,
    reviewCount: 56
  },
  {
    id: "aurora-desk",
    name: "Aurora Desk",
    price: 119,
    image: "https://images.unsplash.com/photo-1706598258189-e4e4bdf1759b?auto=format&fit=crop&q=80",
    intensity: 8000,
    description: "Design élégant pour votre bureau, avec options de couleurs et une efficacité prouvée.",
    rating: 4.6,
    reviewCount: 92
  },
  {
    id: "wake-up-light",
    name: "Wake-Up Light Deluxe",
    price: 149,
    image: "https://images.unsplash.com/photo-1593094213030-bb5591512222?auto=format&fit=crop&q=80",
    intensity: 7500,
    description: "Réveil lumineux progressif pour un réveil naturel et en douceur, comme un lever de soleil.",
    rating: 4.7,
    reviewCount: 104
  }
];

const Products = () => {
  const [intensityFilter, setIntensityFilter] = useState<number | null>(null);
  const [priceSort, setPriceSort] = useState<"asc" | "desc" | null>(null);
  
  const filteredProducts = products
    .filter(product => intensityFilter ? product.intensity >= intensityFilter : true)
    .sort((a, b) => {
      if (priceSort === "asc") return a.price - b.price;
      if (priceSort === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gradient-to-b from-lumi-peach/30 to-white py-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl md:text-4xl font-bold font-heading mb-6">Nos produits de luminothérapie</h1>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Découvrez notre gamme de lampes de luminothérapie conçues pour améliorer votre bien-être quotidien
            et vous aider à retrouver votre énergie naturelle.
          </p>

          {/* Filtres */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-8 flex flex-wrap gap-4">
            <div>
              <label htmlFor="intensity" className="block text-sm font-medium text-gray-700 mb-1">
                Intensité minimale (lux)
              </label>
              <select 
                id="intensity"
                className="rounded-md border border-gray-300 px-3 py-2 bg-white"
                value={intensityFilter || ""}
                onChange={(e) => setIntensityFilter(e.target.value ? Number(e.target.value) : null)}
              >
                <option value="">Tous</option>
                <option value="5000">5 000+ lux</option>
                <option value="8000">8 000+ lux</option>
                <option value="10000">10 000+ lux</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                Trier par prix
              </label>
              <select 
                id="price"
                className="rounded-md border border-gray-300 px-3 py-2 bg-white"
                value={priceSort || ""}
                onChange={(e) => setPriceSort(e.target.value as "asc" | "desc" | null || null)}
              >
                <option value="">Par défaut</option>
                <option value="asc">Prix croissant</option>
                <option value="desc">Prix décroissant</option>
              </select>
            </div>
          </div>

          {/* Liste des produits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <span className="bg-lumi-yellow/50 px-3 py-1 rounded text-sm font-medium">
                      {product.price.toFixed(2)} €
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="font-medium text-gray-700">{product.intensity.toLocaleString()} lux</span>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1">{product.rating} ({product.reviewCount})</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="bg-lumi-orange hover:bg-lumi-orange-dark text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200 flex-1">
                      Acheter maintenant
                    </button>
                    <Link 
                      to={`/products/${product.id}`}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-gray-700"
                    >
                      Détails
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Products;
