import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = ({ scrollToSection, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);

  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <div className="container">
      <motion.div 
  className="logo"
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
>
  <button 
    onClick={() => window.location.reload()} 
    style={{ all: 'unset', cursor: 'pointer' }}
  >
    <span className="green-text">GREEN</span>
    <span className="white-text"> BIT</span>
  </button>
</motion.div>

        
        <nav>
          <ul>
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Us' },
              { id: 'products', label: 'Products' },
              { id: 'contact', label: 'Contact Us' }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
