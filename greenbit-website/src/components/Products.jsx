import { motion } from 'framer-motion';

const Products = () => {
  return (
    <div className="products-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1>OUR PRODUCTS</h1>
          
          <div className="product-card">
            <h2>VOLYTIX</h2>
            <h3>Dashboard</h3>
            
            <div className="dashboard-grid">
              <div className="dashboard-item">
                <h4>Current TR-1 Voltage</h4>
                <p className="value">419 v</p>
              </div>
              
              <div className="dashboard-item">
                <h4>Latest Consumption</h4>
                <p className="value">10.0k kw/h</p>
              </div>
              
              <div className="dashboard-item">
                <h4>Avg. Daily Consumption</h4>
                <p className="value">9,924383 kw/h</p>
              </div>
            </div>
            
            <div className="features">
              <h4>Dashboard Features:</h4>
              <ul>
                <li>Data Entry</li>
                <li>Submission Entry</li>
                <li>Employees</li>
                <li>Assign Employees</li>
              </ul>
            </div>
            
            <div className="additional-info">
              <h4>Transformer Voltages</h4>
              <p>Daily voltage readings for transformers</p>
              
              <h4>All Time</h4>
              <p>Current Analysis</p>
              <p className="indent">Day/outset measurement in response</p>
              
              <h4>All Time</h4>
              <p>Transformer Voltages</p>
              <p className="indent">Day voltage readings for transformers</p>
              
              <h4>All Time</h4>
              <p>Notifications</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;