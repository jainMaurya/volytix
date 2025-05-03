import { motion } from 'framer-motion';

const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const leftColumnVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const rightColumnVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const Contact = () => {
  return (
    <div className="contact-section py-20">
      <div className="container mx-auto px-4">
        {/* Heading animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={headingVariants}
          className="flex justify-center items-center mb-10"
        >
          <h1 className="text-5xl font-bold">
            <span className="text-green">CONTACT</span>{" "}
            <span className="text-white">US</span>
          </h1>
        </motion.div>

        <div className="contact-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={leftColumnVariants}
            className="contact-info space-y-6"
          >
            <div className="info-item">
              <div className='flex flex-row gap-3 items-center'>
                <img src="Email.png" alt="Email" className='w-8 h-8' />
                <h3 className='text-3xl'>E-Mail</h3>
              </div>
              <p>1234@gmail.com</p>
            </div>

            <div className="info-item">
              <div className='flex flex-row gap-3 items-center'>
                <img src="VisitUs.png" alt="Visit" className='w-8 h-8' />
                <h3 className='text-3xl'>Visit Us</h3>
              </div>
              <p>123, street India</p>
            </div>

            <div className="info-item">
              <div className='flex flex-row gap-3 items-center'>
                <img src="Support.png" alt="Support" className='w-8 h-8' />
                <h3 className='text-3xl'>Get Support</h3>
              </div>
              <p>Chat with us</p>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={rightColumnVariants}
            className="contact-form"
          >
            <form>
              <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" className="w-full" />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" className="w-full" />
                </div>
              </div>

              <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" id="email" className="w-full" />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" className="w-full" />
                </div>
              </div>

              <div className="form-group mt-4">
                <label htmlFor="message">Enter your message</label>
                <textarea id="message" rows="4" className="w-full"></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 bg-green text-white px-6 py-2 rounded"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
