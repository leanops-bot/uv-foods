import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoreHighlights } from './components/CoreHighlights';
import { Pillars } from './components/Pillars';
import { About } from './components/About';
import { Businesses } from './components/Businesses';
import { Sustainability } from './components/Sustainability';
import { Governance } from './components/Governance';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CoreHighlights />
      <Pillars />
      <About />
      <Businesses />
      <Sustainability />
      <Governance />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
