
import { Truck, PackageCheck, ShieldCheck, SlidersHorizontal } from 'lucide-react';

const AdvantageSection = () => {
  const advantages = [
    {
      icon: <Truck className="h-8 w-8 text-lumi-orange-dark" />,
      title: "Livraison gratuite en 48h",
      description: "Profitez d'une livraison rapide et gratuite pour tous vos achats."
    },
    {
      icon: <PackageCheck className="h-8 w-8 text-lumi-orange-dark" />,
      title: "Satisfait ou remboursé sous 14 jours",
      description: "Nous vous remboursons intégralement si nos produits ne vous conviennent pas."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-lumi-orange-dark" />,
      title: "Lumière sans UV, 100% sécurisée",
      description: "Nos lampes n'émettent pas de rayons UV nocifs et sont parfaitement sécurisées."
    },
    {
      icon: <SlidersHorizontal className="h-8 w-8 text-lumi-orange-dark" />,
      title: "Intensité lumineuse réglable",
      description: "Adaptez l'intensité de la lumière selon vos besoins pour un confort optimal."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <h2 className="text-center heading-md mb-12">Pourquoi choisir Lumi Nova ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-lumi-peach/30 shadow-sm hover:shadow-md transition-shadow duration-200 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-lumi-peach to-lumi-orange/20 p-3 rounded-full w-fit mb-4">
                {advantage.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
