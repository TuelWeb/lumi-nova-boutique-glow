
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi du formulaire (dans un vrai site, ce serait une API)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Réinitialiser le message de succès après 5 secondes
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-lumi-peach/40 to-white py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Contactez-nous</h1>
              <p className="text-xl text-gray-700">
                Notre équipe est à votre écoute pour répondre à toutes vos questions sur la luminothérapie 
                et vous accompagner dans votre choix.
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact Content */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="p-6 shadow-md border-0">
                <h2 className="text-2xl font-bold font-heading mb-6">Envoyez-nous un message</h2>
                
                {submitSuccess && (
                  <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6 animate-fade-in">
                    Votre message a bien été envoyé ! Nous vous répondrons dans les meilleurs délais.
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nom
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-lumi-orange/50 focus:border-lumi-orange/50"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-lumi-orange/50 focus:border-lumi-orange/50"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Sujet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-lumi-orange/50 focus:border-lumi-orange/50"
                      required
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="question">Question sur un produit</option>
                      <option value="commande">Suivi de commande</option>
                      <option value="sav">Service après-vente</option>
                      <option value="autre">Autre demande</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-lumi-orange/50 focus:border-lumi-orange/50"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-lumi-orange hover:bg-lumi-orange-dark text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                  </button>
                </form>
              </Card>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold font-heading mb-6">Informations de contact</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-lumi-peach/50 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-lumi-orange-dark" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-700">contact@luminova.fr</p>
                    <p className="text-sm text-gray-500 mt-1">Réponse sous 24-48h</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-lumi-peach/50 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-lumi-orange-dark" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Téléphone</h3>
                    <p className="text-gray-700">01 23 45 67 89</p>
                    <p className="text-sm text-gray-500 mt-1">Du lundi au vendredi, 9h-18h</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-lumi-peach/50 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-lumi-orange-dark" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Adresse</h3>
                    <p className="text-gray-700">
                      123 Avenue de la Lumière<br />
                      75000 Paris, France
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="bg-lumi-peach/50 p-3 rounded-full hover:bg-lumi-peach transition-colors duration-200"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-6 w-6 text-lumi-orange-dark" />
                    </a>
                    <a 
                      href="#" 
                      className="bg-lumi-peach/50 p-3 rounded-full hover:bg-lumi-peach transition-colors duration-200"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-6 w-6 text-lumi-orange-dark" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-gradient-to-br from-lumi-yellow/50 to-lumi-orange/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Besoin d'un conseil personnalisé ?</h3>
                <p className="text-gray-700 mb-4">
                  Notre équipe d'experts est disponible pour vous guider dans le choix de la 
                  lampe de luminothérapie adaptée à vos besoins spécifiques.
                </p>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-lumi-orange-dark" />
                  <span className="font-medium">01 23 45 67 89</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-12 bg-gray-100">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12">
            <h2 className="text-2xl font-bold font-heading mb-8 text-center">Nous trouver</h2>
            <div className="h-96 bg-gray-300 rounded-lg overflow-hidden">
              {/* Ici, vous pourriez intégrer une carte Google Maps */}
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <p className="text-gray-500">Carte Google Maps</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
