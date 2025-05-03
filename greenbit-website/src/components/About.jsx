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
         <div className='flex flex-col justify-center items-center'>
  <h1 className='pb-0 leading-none text-5xl'>
    <span className="text-[#07F09B]">ABOUT</span>{" "}
    <span className="text-white ">US</span>
  </h1>
</div>

 


          <div className='flex flex-col-reverse md:flex-row items-center'>
          <div className='m-0 pt-14  md:w-3/5 md:p-10 md:mr-5'>
          <p >
            Greenbit is a European energy company dedicated to sustainability and reducing fossil fuel 
            dependence by offering renewable energy solutions. Its core product, HVO100—a renewable 
            biodiesel made from waste-based vegetable fats—is fully compatible with existing diesel 
            engines and is classified as a green fuel. Operating mainly in Norway and Sweden, Greenbit 
            is committed to becoming fossil-free by 2030 and is expanding its network of automated 
            fuel stations.
          </p>
          </div>
          <div className=' w-3/4 h-1/3 p-0 m-0 md:w-1/4'>
            <img src="/About.png" alt="About-img" />
          </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default About;
