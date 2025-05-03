import { motion } from 'framer-motion'; 
import 'animate.css';

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
            <div className='z-10 p-0 earth'>
              <img src="/Mainimg.png" alt="Main" className="max-h-screen" />
            </div>
            <div className='z-20 flex flex-col justify-center'>
              <h1 className="whitespace-nowrap animate__animated animate__zoomIn">
                <span className="text-green ">Powering </span>{" "}
                <span className="text-white"> Up On Your </span>{" "}
                <span className="text-green "> Grids </span>
              </h1>
              <h2 >
                <span className="text-green text-2xl">GREEN</span>{" "}
                <span className="text-white text-2xl"> BIT</span>
              </h2>
              <p className="flex items-center justify-center gap-2 mt-2 text-white">
      <span className="text-green text-xl">✓</span> Over 18000 Campus Points Nationwide
       </p>
             
              <motion.button
  className="mt-4 px-6 py-3 rounded-lg bg-green text-white font-semibold shadow-lg  animate__animated animate__zoomIn"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
  whileHover={{
    scale: 1.1,
    boxShadow: '0px 2px 2px white',
    transition: { duration: 0.3 },
  }}
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