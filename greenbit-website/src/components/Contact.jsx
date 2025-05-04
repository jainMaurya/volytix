import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        {/* Left Side - "Let's talk" section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="talk-section"
        >
          <span className="talk-heading">Let's </span>
          <span className="talk-heading text-[#07F09B] ">Talk </span>
          <div className="talk-points">
            <p className="talk-subheading pt-10">Talk to our team today to:</p>
            <ul className="benefits-list pt-10">
              <li>Understand how our product may fit in your video needs</li>
              <li>Discover the capabilities and answers your questions</li>
              <li>Get a customized quote for your business</li>
            </ul>
          </div>
        </motion.div>

        {/* Right Side - Form section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="form-section"
        >
          <div className="form-container">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name*</label>
                <input 
                  type="text" 
                  id="firstName" 
                  className="form-input"
                 
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name*</label>
                <input 
                  type="text" 
                  id="lastName" 
                  className="form-input"
                  
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">E-mail*</label>
                <input 
                  type="email" 
                  id="email" 
                  className="form-input"
                  
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number*</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="form-input"
                  
                />
              </div>
            </div>

            <div className="form-group message-group">
              <label htmlFor="message">Enter your message</label>
              <textarea 
                id="message" 
                rows="4" 
                className="form-textarea"
               
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="submit-button text-[#015033] w-20"
            >
              Send
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;