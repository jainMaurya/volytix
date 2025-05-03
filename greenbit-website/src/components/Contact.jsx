import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className='flex flex-row justify-center items-center'>
            <h1 >
              <span className="text-green">CONTACT</span>{" "}
              <span className="text-white">US</span>
            </h1>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-item">
                <div className='flex flex-row gap-3'>
                <img src="Email.png" alt="Email" className='w-8 h-8' />
                <h3 className='text-3xl'>E-Mail</h3>
                </div>
                <p>1234@gmail.com</p>
              </div>
              
              <div className="info-item">
                <div className='flex flex-row gap-3'>
                <img src="VisitUs.png" alt="Visit" className='w-8 h-8' />
                <h3 className='text-3xl'> Visit Us</h3>
                </div>
                <p>123, street India</p>
              </div>
              
              <div className="info-item">
                <div className='flex flex-row gap-3'>
                <img src="Support.png" alt="Support" className='w-8 h-8' />
                <h3 className='text-3xl'>Get Support</h3>
                </div>
                <p>Chat with us</p>
              </div>
            </div>
            
            <div className="contact-form">
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Enter your message</label>
                  <textarea id="message" rows="4"></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  
                >
                  Submit
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;