import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
      <div>
        <section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27999.01418147242!2d76.91296453110074!3d28.693332568956926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d047309fff32f%3A0xfc5606ed1b5d46c3!2sDelhi!5e0!3m2!1sen!2sin!4v1609792952673!5m2!1sen!2sin"
           style={{width:"100%", height:"550px",
            frameborder:"0",}}  
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </section>
        <footer>© 2023 by Anton & Lily. Proudly created with Wix.com</footer>
      </div>
    );
}

export default Footer
