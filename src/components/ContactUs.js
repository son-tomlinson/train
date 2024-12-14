import React from "react";
import "../stylesheet/Contact.css"

const ContactUs = () => {
  return (
    <section id="contact" className="section container">
      <div className="heading">
        <h4>Pricing</h4>
        <h1>Choose your plan to Continue</h1>
      </div>
        <div className="contact-container">
      {/* Left Side - Company Info */}
      <div className="contact-form heading">
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
        <div className="contact-details">
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <p><strong>Email:</strong> contact@yourcompany.com</p>
          <p><strong>Address:</strong> 123 Main Street, Anytown, USA</p>
        </div>
        <div className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434508828!2d-122.419415684681!3d37.77492977975817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085814d0c45db4f%3A0x1dabc0bc6a243491!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1600053424996!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            title="Store Location"
          ></iframe>
        </div>
      </div>




    </div>

    </section>
  );
};

export default ContactUs;
