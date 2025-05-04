import { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    products: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (sectionId) => {
    const element = sectionRefs[sectionId].current;
    if (element) {
      const headerOffset = window.innerWidth < 768 ? 120 : 80;
      const y = element.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    }, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className="app">
      <Header scrollToSection={scrollToSection} activeSection={activeSection} />

      <main>
        <section id="home" ref={sectionRefs.home} aria-label="Home Section">
          <Hero scrollToSection={scrollToSection} />
        </section>

        <section id="about" ref={sectionRefs.about} aria-label="About Section">
          <About />
        </section>

        <section id="products" ref={sectionRefs.products} aria-label="Products Section">
          <Products />
        </section>

        <section id="contact" ref={sectionRefs.contact} aria-label="Contact Section">
          <Contact />
        </section>
      </main>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
