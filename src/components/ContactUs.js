import React from "react";
import "../stylesheet/Contact.css"

const ContactUs = () => {
  return (
    <section id="contact" className="section container">
        <div className="contact-container">
      {/* Left Side - Company Info */}
      <div className="contact-form heading">
        <h1>Contact Us</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your message here" required></textarea>
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>

      {/* Right Side - Contact Form */}
      <div className="company-info heading">
        <h1>MEDIQUINCE</h1>
        <div className="contact-details">
          <p><strong>Address:</strong> 123 Main Street, Anytown, USA</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <p><strong>Email:</strong> contact@yourcompany.com</p>
        </div>
      </div>



    </div>

    </section>
  );
};

export default ContactUs;
