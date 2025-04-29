
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-lumi-peach/40 to-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-gray-800">
              Retrouvez énergie et bien-être grâce à la luminothérapie
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Nos lampes de luminothérapie sont conçues pour combattre la fatigue saisonnière et améliorer votre humeur naturellement.
            </p>
            <Link to="/products" className="bg-lumi-orange hover:bg-lumi-orange-dark text-white flex items-center w-fit px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              Découvrir nos lampes
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="flex-1 animate-fade-in delay-200">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-lumi-orange/30 to-lumi-yellow rounded-full blur-3xl opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                alt="Lampe de luminothérapie en situation dans un salon" 
                className="rounded-xl shadow-lg w-full h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
