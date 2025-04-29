
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AdvantageSection from '../components/AdvantageSection';
import FeaturedProduct from '../components/FeaturedProduct';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <AdvantageSection />
        <FeaturedProduct />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
