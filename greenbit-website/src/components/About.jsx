import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className='flex flex-row justify-center items-center'>
          <h1 className='border-b-4 border-[#90EDB5] pb-1 inline-block items-center'>
            <span className="text-green ">ABOUT</span>{" "}
            <span className="text-white">US</span>
          </h1>
          </div>
          <div className='flex flex-row'>
          <div className='w-3/4 text-right p-6'>
          <p className=' text-right'>
            Greenbit is a European energy company dedicated to sustainability and reducing fossil fuel 
            dependence by offering renewable energy solutions. Its core product, HVO100—a renewable 
            biodiesel made from waste-based vegetable fats—is fully compatible with existing diesel 
            engines and is classified as a green fuel. Operating mainly in Norway and Sweden, Greenbit 
            is committed to becoming fossil-free by 2030 and is expanding its network of automated 
            fuel stations.
          </p>
          </div>
          <div className='w-1/4'>
            <img src="/About.png" alt="About-img" />
          </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default About;
