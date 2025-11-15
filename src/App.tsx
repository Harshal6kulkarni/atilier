import LandingBar from './components/LandingBar';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import Capabilities from './components/Capabilities';
import Outcomes from './components/Outcomes';
import Process from './components/Process';
import Sectors from './components/Sectors';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <LandingBar />
      <Hero />
      <FeaturedWork />
      <Capabilities />
      <Outcomes />
      <Process />
      <Sectors />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
