const Footer = ({ scrollToSection }) => {
  return (
    <footer className="footer border-t-2 border-green">
      <div className="container">
        <div className="footer-content">
          
          {/* Logo column */}
          <div className="footer-column">
            <h3
              className="text-3xl font-bold cursor-pointer"
              onClick={() => window.location.reload()}
            >
              <span className="text-green">GREEN</span>
              <span className="text-white"> BIT</span>
            </h3>
          </div>

          {/* Pages column */}
          <div className="footer-column">
            <h4>Pages</h4>
            <ul>
              <li onClick={() => scrollToSection('home')} className="cursor-pointer hover:underline">Home</li>
              <li onClick={() => scrollToSection('about')} className="cursor-pointer hover:underline">About Us</li>
              <li onClick={() => scrollToSection('products')} className="cursor-pointer hover:underline">Products</li>
              <li onClick={() => scrollToSection('contact')} className="cursor-pointer hover:underline">Contact Us</li>
            </ul>
          </div>

          {/* Explore column */}
          <div className="footer-column">
            <h4>Explore</h4>
            <ul>
              <li>Design</li>
              <li>Prototyping</li>
              <li>Development features</li>
              <li>Design systems</li>
              <li>Collaboration features</li>
              <li>Design process</li>
              <li>FigJam</li>
            </ul>
          </div>

          {/* Resources column */}
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Best practices</li>
              <li>Colors</li>
              <li>Color wheel</li>
              <li>Support</li>
              <li>Developers</li>
              <li>Resource library</li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Green Bit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
