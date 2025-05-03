import { motion } from 'framer-motion';

const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Products = () => {
  return (
    <div className="products-section py-20">
      <div className="container mx-auto px-4">
        {/* Heading animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={headingVariants}
          className="text-center mb-10"
        >
          <h1 className="text-5xl font-bold">
            <span className="text-white">OUR</span>{" "}
            <span className="text-green">PRODUCTS</span>
          </h1>
        </motion.div>

        {/* Image animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={imageVariants}
          className="flex justify-center"
        >
          <img src="/Productimg.png" alt="Productimg" className="max-w-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
