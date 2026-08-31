import React from 'react'

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-title">
        <h2>Contact Us</h2>
        <p>Secure your organization today with our expert team</p>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h3>Headquarters</h3>
              <p>1602 Belgrano Boulevard<br />Tarija, BO</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <div>
              <h3>Phone</h3>
              <p>+591 75124410</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h3>Email</h3>
              <p>operations@cipherepoch.com</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-shield-alt"></i>
            <div>
              <h3>PGP Key</h3>
              <p>0xC1PH3R3P0CH</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <div className="zoho-form-container">
            <iframe
              aria-label='Contact Us'
              frameBorder="0"
              style={{
                height: '600px',
                width: '100%',
                border: 'none'
              }}
              src='https://forms.zohopublic.com/julioiglesiascibere1/form/ContactUs/formperma/dCsngHBI7ErT0zuO_VXapVKhITtwshbkXkRh-KEIdZg'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
