import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send email with EmailJS
    emailjs.send('service_aclkv0z', 'template_hxs4w6r', formData, 'bwsRT3awrDepPDbLJ')
      .then((response) => {
        alert('Message Sent Successfully!');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          message: ''
        });
      }, (error) => {
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <div className="contact-form-content">
      <form onSubmit={handleSubmit}>
        <div className="name-container">
          <input 
            type="text" 
            name="firstname" 
            placeholder="First Name" 
            value={formData.firstname} 
            onChange={handleChange} 
          />
          <input 
            type="text" 
            name="lastname" 
            placeholder="Last Name" 
            value={formData.lastname} 
            onChange={handleChange} 
          />
        </div>
        <input 
          type="text" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
        />
        <textarea 
          name="message" 
          placeholder="Message" 
          rows={3} 
          value={formData.message} 
          onChange={handleChange}
        ></textarea>
        <button type="submit">SEND</button>
      </form>
    </div>
  );
}

export default ContactForm;
