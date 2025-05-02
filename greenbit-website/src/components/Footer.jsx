const Footer = () => {
  return (
    <footer className="footer border-t-2 border-green">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3 className="text-2xl font-bold">
              <span className="text-green">GREEN</span>
              <span className="text-white"> BIT</span>
            </h3>
          </div>
            
            <div className="footer-column">
              <h4>Pages</h4>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Contact Us</li>
              </ul>
            </div>
            
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
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Green Bit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;