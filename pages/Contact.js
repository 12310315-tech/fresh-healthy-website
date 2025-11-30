import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Get in touch with our team for any inquiries</p>
        </div>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's Talk</h3>
            <p>Have questions about our products or need assistance with your order? We're here to help!</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Our Location</h4>
                  <p>Hazmieh, beside Mazda company car</p>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Phone Number</h4>
                  <p>78 858 878</p>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email Address</h4>
                  <p>info@freshandhealthy.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-clock"></i>
                <div>
                  <h4>Working Hours</h4>
                  <p>Monday - Saturday: 8:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
               <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
              <a href="https://x.com/"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;