
const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie L.",
      title: "Utilisatrice depuis 2 ans",
      content: "J'utilise ma lampe Caxalux tous les matins pendant 20 minutes. Depuis, mes hivers ne sont plus synonymes de fatigue et de morosité !",
      rating: 5,
    },
    {
      name: "Thomas B.",
      title: "Achat récent",
      content: "Sceptique au début, j'ai été bluffé par les résultats. Après seulement une semaine d'utilisation quotidienne, je me sens plus énergique et de meilleure humeur.",
      rating: 4,
    },
    {
      name: "Sophie M.",
      title: "Cliente fidèle",
      content: "Le service client est exceptionnel et le produit tient toutes ses promesses. Je recommande vivement Lumi Nova à tous ceux qui souffrent de troubles du sommeil.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <h2 className="text-center heading-md mb-12">Ce que nos clients disent</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-lumi-peach/20 to-lumi-orange/10 p-6 rounded-xl border border-lumi-peach/30 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"{testimonial.content}"</p>
              <div>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
