import { motion } from 'framer-motion';

const headingVariants = {
  hidden: { opacity: 0, y: -50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: [1, 1.05, 1],
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const About = () => {
  return (
    <div className="about-section py-20">
      <div className="container mx-auto px-4">
        {/* Heading Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={headingVariants}
          className="flex flex-col justify-center items-center"
        >
          <h1 className="text-5xl font-bold leading-none">
            <span className="text-[#07F09B]">ABOUT</span>{" "}
            <span className="text-white">US</span>
          </h1>
        </motion.div>

        <div className="flex flex-col-reverse justify-center w-full md:flex-row items-center mt-10">
          {/* Text Animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
            className="md:w-3/5 md:pr-10 pt-10 md:pt-0"
          >
            <p >
              Greenbit is a European energy company dedicated to sustainability and reducing fossil fuel 
              dependence by offering renewable energy solutions. Its core product, HVO100—a renewable 
              biodiesel made from waste-based vegetable fats—is fully compatible with existing diesel 
              engines and is classified as a green fuel. Operating mainly in Norway and Sweden, Greenbit 
              is committed to becoming fossil-free by 2030 and is expanding its network of automated 
              fuel stations.
            </p>
          </motion.div>

         
        </div>
      </div>
    </div>
  );
};

export default About;
