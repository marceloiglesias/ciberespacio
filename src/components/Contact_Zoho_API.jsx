import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Crear un FormData para enviar a Zoho
      const zohoFormData = new FormData()

      // Mapear los campos de tu formulario a los campos de Zoho
      // IMPORTANTE: Necesitas reemplazar estos nombres con los nombres EXACTOS de los campos en Zoho
      // Para obtener los nombres correctos:
      // 1. Ve a tu formulario en Zoho
      // 2. Inspecciona el código HTML del formulario
      // 3. Busca los atributos "name" de cada campo
      zohoFormData.append('SingleLine', formData.name)  // Campo "Full Name" en Zoho
      zohoFormData.append('Email', formData.email)      // Campo "Email" en Zoho
      zohoFormData.append('SingleLine1', formData.company) // Campo "Company" en Zoho
      zohoFormData.append('MultiLine', formData.message)   // Campo "Message" en Zoho

      // Enviar a Zoho Forms
      const response = await fetch(
        'https://forms.zohopublic.com/julioiglesiascibere1/form/ContactUs/formperma/r4-tTkLoQSSsRiTLlTSxQMwHXNNFGAbW24CaJGJSQhw-KEIdZg/htmlRecords/submit',
        {
          method: 'POST',
          body: zohoFormData,
          mode: 'no-cors' // Importante para evitar problemas de CORS
        }
      )

      // Con mode: 'no-cors', no podemos leer la respuesta
      // Asumimos que fue exitoso si no hay error
      setSubmitStatus('success')
      alert('Message sent securely! Our team will contact you shortly.')

      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      alert('There was an error sending your message. Please try again or contact us directly at operations@cipherepoch.com')
    } finally {
      setIsSubmitting(false)
    }
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">How can we help?</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            <button
              type="submit"
              className="cta-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Secure Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
