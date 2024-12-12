import React from 'react';
import './Contact.css'
const Contact = () => {
  return (
    <div className="log">
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
