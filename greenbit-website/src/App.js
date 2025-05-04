import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const sections = ['home', 'about', 'products', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;

            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(section);
              break;
            }
          }
        }
      }, 100); // Debounce by 100ms
    };

    handleScroll(); // Trigger once on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Header scrollToSection={scrollToSection} activeSection={activeSection} />

      <main>
        <section id="home" aria-label="Home Section">
          <Hero scrollToSection={scrollToSection} />
        </section>

        <section id="about" aria-label="About Section">
          <About />
        </section>

        <section id="products" aria-label="Products Section">
          <Products />
        </section>

        <section id="contact" aria-label="Contact Section">
          <Contact />
        </section>
      </main>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
