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
          <div className='text-center'>
            <h1 >
              <span className="text-white">OUR</span>{" "}
              <span className="text-green">PRODUCTS</span>
            </h1>
          </div>
          <img src="/Productimg.png" alt="Productimg" />
        </motion.div>
      </div>
    </div>
  );
};

export default Products;