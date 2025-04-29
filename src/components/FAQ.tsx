
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "Qu'est-ce que la luminothérapie ?",
      answer: "La luminothérapie est une méthode thérapeutique qui consiste à s'exposer à une lumière artificielle proche de la lumière naturelle du soleil, afin de lutter contre les troubles de l'humeur saisonniers et d'améliorer le sommeil."
    },
    {
      question: "Combien de temps faut-il utiliser une lampe de luminothérapie ?",
      answer: "Il est généralement recommandé d'utiliser une lampe de luminothérapie pendant 20 à 30 minutes par jour, de préférence le matin. La régularité est importante pour obtenir des résultats optimaux."
    },
    {
      question: "À quelle distance doit-on se placer de la lampe ?",
      answer: "Pour une efficacité optimale, il est conseillé de se placer à environ 20-30 cm de la lampe. Cependant, cette distance peut varier selon le modèle et l'intensité lumineuse (lux)."
    },
    {
      question: "La luminothérapie est-elle sans danger ?",
      answer: "Oui, nos lampes de luminothérapie sont sécurisées et ne produisent pas de rayons UV nocifs. Elles sont conçues pour être utilisées sans danger au quotidien, mais il est toujours recommandé de consulter un médecin si vous avez des pathologies oculaires préexistantes."
    },
    {
      question: "Quels sont les bienfaits de la luminothérapie ?",
      answer: "La luminothérapie peut aider à combattre la dépression saisonnière, améliorer l'humeur, réguler le sommeil, augmenter l'énergie et la concentration, et rééquilibrer l'horloge biologique."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-lumi-blue/10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <h2 className="text-center heading-md mb-12">Questions fréquentes</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 bg-white rounded-lg shadow-sm overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                className="flex justify-between items-center w-full px-6 py-4 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 animate-accordion-down">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
