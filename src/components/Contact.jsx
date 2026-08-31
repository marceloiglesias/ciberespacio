import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent securely! Our team will contact you shortly.')
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    })
  }

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
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
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
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">How can we help?</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="cta-button">Send Secure Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
