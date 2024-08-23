import React from 'react';
import './ContactMe.css';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';

function ContactMe() {
  return (
    <section className="contact-container" id="contactme">
        <h5>Contact Me</h5>
        <div className="contact-content">
            <div className="contact-info">
              <div style={{flex:1}} className='contact1'>
                <ContactInfoCard 
                linkUrl="mailto:atharvashewale265@gmail.com"
                iconUrl="./assets/images/email.png" 
                text="atharvashewale265@gmail.com"
                />
                <ContactInfoCard 
                linkUrl="https://github.com/AtharvaSureshShewale"
                iconUrl="./assets/images/github.png" 
                text="https://github.com/AtharvaSureshShewale"
                />
              </div>
              <div style={{flex:1}} className="contact2">
              <ContactInfoCard 
                iconUrl="./assets/images/linkedin.png" 
                text="https://www.linkedin.com/in/atharva-shewale-3224122b5/"
                linkUrl="https://www.linkedin.com/in/atharva-shewale-3224122b5/"
                />
              <ContactInfoCard 
                iconUrl="./assets/images/twitter.png" 
                text="https://x.com/atharva_sh449"
                linkUrl="https://x.com/atharva_sh449"
                />
              </div>
            </div>
            <div style={{flex:1}}>
                <ContactForm/>
            </div>
        </div>
    </section>
  )
}

export default ContactMe
