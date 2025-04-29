import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Luminotherapie = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-lumi-orange/20 to-lumi-peach/30 py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">La luminothérapie</h1>
              <p className="text-xl text-gray-700 mb-8">
                Découvrez comment la luminothérapie peut améliorer votre bien-être quotidien et aider à combattre les troubles de l'humeur saisonniers.
              </p>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3">
              <section className="mb-12">
                <h2 className="text-2xl font-bold font-heading mb-4">Qu'est-ce que la luminothérapie ?</h2>
                <p className="text-gray-700 mb-4">
                  La luminothérapie, également appelée photothérapie, est une méthode thérapeutique qui consiste à exposer 
                  une personne à une lumière artificielle qui reproduit les caractéristiques de la lumière naturelle du soleil. 
                  Cette technique est principalement utilisée pour traiter les troubles affectifs saisonniers (TAS) et d'autres 
                  conditions liées au manque de lumière naturelle.
                </p>
                <p className="text-gray-700 mb-4">
                  Lorsque l'automne et l'hiver arrivent, les journées raccourcissent et l'exposition à la lumière naturelle 
                  diminue considérablement. Ce changement peut perturber notre horloge biologique et entraîner une baisse de 
                  la production de sérotonine, l'hormone du bien-être, et une augmentation de la mélatonine, l'hormone du sommeil.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-lumi-peach/30 my-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-lumi-orange/20 p-3 rounded-full">
                      <svg className="h-6 w-6 text-lumi-orange-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Le saviez-vous ?</h3>
                      <p className="text-gray-700">
                        L'exposition à la lumière du matin peut aider à réguler le rythme circadien et améliorer la qualité du sommeil le soir.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-bold font-heading mb-4">Les bienfaits de la luminothérapie</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mt-1 mr-3 text-lumi-orange-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-lg">Amélioration de l'humeur</h3>
                      <p className="text-gray-700">
                        La luminothérapie aide à augmenter la production de sérotonine, réduisant ainsi les symptômes dépressifs 
                        et améliorant l'humeur générale.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mt-1 mr-3 text-lumi-orange-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-lg">Régulation du sommeil</h3>
                      <p className="text-gray-700">
                        En ajustant votre rythme circadien, la luminothérapie peut aider à normaliser les cycles de sommeil 
                        et à combattre les troubles du sommeil.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mt-1 mr-3 text-lumi-orange-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-lg">Augmentation de l'énergie</h3>
                      <p className="text-gray-700">
                        L'exposition à la lumière vive peut aider à combattre la fatigue et augmenter les niveaux d'énergie, 
                        particulièrement pendant les mois d'hiver.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mt-1 mr-3 text-lumi-orange-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-lg">Amélioration de la concentration</h3>
                      <p className="text-gray-700">
                        Des études montrent que la luminothérapie peut améliorer la concentration et les performances cognitives.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-bold font-heading mb-4">Comment utiliser la luminothérapie ?</h2>
                <p className="text-gray-700 mb-4">
                  Pour obtenir les meilleurs résultats avec la luminothérapie, il est recommandé de suivre ces conseils :
                </p>
                <div className="bg-white rounded-lg shadow-sm border border-lumi-peach/30 overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-3">Quand utiliser ?</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg className="h-4 w-4 mt-1 mr-2 text-lumi-orange-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>De préférence le matin, idéalement entre 6h et 9h</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 mt-1 mr-2 text-lumi-orange-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Régulièrement, tous les jours</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 mt-1 mr-2 text-lumi-orange-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Pendant 20 à 30 minutes</span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-3">Comment l'utiliser ?</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg className="h-4 w-4 mt-1 mr-2 text-lumi-orange-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Placer la lampe à 20-30 cm de distance</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 mt-1 mr-2 text-lumi-orange-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Orientée vers les yeux (sans regarder directement)</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 mt-1 mr-2 text-lumi-orange-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Pendant des activités quotidiennes (lecture, petit-déjeuner)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-bold font-heading mb-4">Études scientifiques</h2>
                <p className="text-gray-700 mb-4">
                  De nombreuses études scientifiques ont démontré l'efficacité de la luminothérapie pour traiter les troubles 
                  affectifs saisonniers et améliorer l'humeur générale.
                </p>
                <div className="bg-lumi-peach/20 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Résultats d'études</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Une étude publiée dans l'American Journal of Psychiatry a montré que 85% des patients souffrant de TAS ont constaté une amélioration significative après un traitement de luminothérapie.</li>
                    <li>Des recherches de l'Université de Vienne ont démontré que la luminothérapie matinale peut augmenter les niveaux d'énergie de 65% chez les participants.</li>
                    <li>Une méta-analyse de 39 études a conclu que la luminothérapie est aussi efficace que certains antidépresseurs pour traiter la dépression saisonnière.</li>
                  </ul>
                </div>
              </section>
            </div>
            
            <div className="md:w-1/3">
              <div className="sticky top-24">
                <div className="bg-white rounded-lg shadow-sm border border-lumi-yellow/50 overflow-hidden mb-8">
                  <div className="bg-lumi-yellow/30 px-6 py-4">
                    <h3 className="font-semibold text-lg">Conseils pratiques</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="bg-lumi-peach/50 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 font-semibold">1</span>
                        <p className="text-gray-700">Commencez par des sessions courtes de 10-15 minutes et augmentez progressivement.</p>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-lumi-peach/50 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 font-semibold">2</span>
                        <p className="text-gray-700">Consultez un médecin avant de commencer si vous avez des problèmes oculaires ou prenez des médicaments photosensibilisants.</p>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-lumi-peach/50 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 font-semibold">3</span>
                        <p className="text-gray-700">Soyez régulier dans votre utilisation pour de meilleurs résultats.</p>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-lumi-peach/50 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 font-semibold">4</span>
                        <p className="text-gray-700">Complétez avec une activité physique régulière pour maximiser les bienfaits.</p>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-lumi-orange/30 to-lumi-peach/40 rounded-lg p-6 text-center">
                  <h3 className="font-semibold text-lg mb-4">Prêt à essayer la luminothérapie ?</h3>
                  <p className="text-gray-700 mb-6">
                    Découvrez notre gamme de lampes de luminothérapie spécialement conçues pour améliorer votre bien-être quotidien.
                  </p>
                  <Link 
                    to="/products" 
                    className="bg-lumi-orange hover:bg-lumi-orange-dark text-white font-medium px-6 py-3 rounded-lg inline-block transition-colors duration-200"
                  >
                    Voir nos produits
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Luminotherapie;
