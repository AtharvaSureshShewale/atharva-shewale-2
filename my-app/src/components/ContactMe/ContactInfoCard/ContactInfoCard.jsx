import React from 'react';
import './ContactInfoCard.css';

function ContactInfoCard({iconUrl, text, linkUrl}) {
  return (
    <a href={linkUrl} className="main">
      <div className="contact-details-card">
        <div className="icon">
            <img src={iconUrl} alt={text} />
        </div>

        <p>{text}</p>
    </div>
    </a>
  )
}

export default ContactInfoCard
