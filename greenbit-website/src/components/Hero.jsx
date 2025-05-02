import { motion } from 'framer-motion'; 


const Hero = ({ scrollToSection }) => {
  return (
    <section className="hero m-0 p-0">
      <div className="container m-0 p-0">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className='flex flex-row'>
            <div className='z-10  p-10 earth '>
          <img src="/Mainimg.png" alt="Main"  />
          </div>
             <div className='z-20 flex flex-col justify-center '>
          <h1>
            <span className="text-green ">Powering</span>{" "}
            <span className="text-white ">Up On Your</span>{" "}
            <span className="text-green ">Grids</span>
          </h1>
          <h2>
            <span className="text-white text-2xl">GREEN</span>{" "}
            <span className="text-white text-2xl">BIT</span>
          </h2>
          <p>Over 18000 Campus Points Nationwide</p>
         
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('products')}
          >
            Explore Our Products
          </motion.button>
          </div>
          </div>
         </motion.div>
        
        </div>
        
      
     
      </section>
  );
};

export default Hero; 