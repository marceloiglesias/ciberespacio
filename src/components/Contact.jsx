import React, { useState, useEffect } from 'react'

const Contact = () => {
  const [isBlocked, setIsBlocked] = useState(false)
  const [blockMessage, setBlockMessage] = useState('')
  const [submissionCount, setSubmissionCount] = useState(0)

  useEffect(() => {
    checkRateLimit()
  }, [])

  const checkRateLimit = () => {
    const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]')
    const now = Date.now()

    // Filtrar envíos de la última hora
    const recentSubmissions = submissions.filter(time => now - time < 60 * 60 * 1000)

    // Si hay 2 o más envíos en la última hora, bloquear
    if (recentSubmissions.length >= 2) {
      const oldestSubmission = Math.min(...recentSubmissions)
      const timeUntilUnblock = (oldestSubmission + 60 * 60 * 1000) - now
      const minutesLeft = Math.ceil(timeUntilUnblock / 60000)

      setIsBlocked(true)
      setBlockMessage(`You have exceeded the submission limit. Please try again in ${minutesLeft} minutes.`)
      setSubmissionCount(recentSubmissions.length)
      return false
    }

    // Si hay 1 envío en los últimos 5 minutos, bloquear temporalmente
    const lastFiveMinutes = submissions.filter(time => now - time < 5 * 60 * 1000)
    if (lastFiveMinutes.length > 0 && recentSubmissions.length >= 1) {
      const lastSubmission = Math.max(...lastFiveMinutes)
      const timeUntilNext = (lastSubmission + 5 * 60 * 1000) - now
      const minutesLeft = Math.ceil(timeUntilNext / 60000)

      setIsBlocked(true)
      setBlockMessage(`Please wait ${minutesLeft} minutes before submitting again.`)
      setSubmissionCount(recentSubmissions.length)
      return false
    }

    setSubmissionCount(recentSubmissions.length)
    setIsBlocked(false)
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!checkRateLimit()) {
      return false
    }

    // Validar campos manualmente
    const form = e.target
    const firstName = form.Name_First.value.trim()
    const email = form.Email.value.trim()
    const service = form.Dropdown.value

    if (!firstName || !email || service === '-Select-') {
      alert('Please fill in all required fields.')
      return false
    }

    // Guardar el timestamp del envío
    const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]')
    submissions.push(Date.now())
    localStorage.setItem('formSubmissions', JSON.stringify(submissions))

    // Crear un formulario temporal que se enviará a Zoho
    const tempForm = document.createElement('form')
    tempForm.method = 'POST'
    tempForm.action = 'https://forms.zohopublic.com/julioiglesiascibere1/form/ContactUs/formperma/jtlcqUHtUVPitUuigzll5WeticcAZvSbJbg-5LpaYM4/htmlRecords/submit'
    tempForm.target = 'zoho-submit-iframe'
    tempForm.style.display = 'none'

    // Copiar todos los campos del formulario original
    const formData = new FormData(form)
    for (let [key, value] of formData.entries()) {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = key
      input.value = value
      tempForm.appendChild(input)
    }

    document.body.appendChild(tempForm)
    tempForm.submit()

    // Mostrar página de éxito después de un pequeño delay
    setTimeout(() => {
      window.location.href = '/success.html'
    }, 500)

    return false
  }

  return (
    <section id="contact">
      {/* iframe oculto para recibir la respuesta de Zoho sin redirigir */}
      <iframe
        name="zoho-submit-iframe"
        style={{ display: 'none' }}
        title="Form Submission"
      />

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
          {isBlocked ? (
            <div className="rate-limit-message">
              <i className="fas fa-exclamation-triangle"></i>
              <h3>Submission Limit Reached</h3>
              <p>{blockMessage}</p>
              <p className="submission-count">Submissions in last hour: {submissionCount}/2</p>
              <button
                className="cta-button"
                onClick={() => window.location.reload()}
              >
                Refresh Status
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} name="form" acceptCharset="UTF-8">
              <div className="form-group">
                <label htmlFor="Name_First">
                  Full Name <span className="required">*</span>
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div>
                    <input
                      type="text"
                      name="Name_First"
                      id="Name_First"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="Name_Last"
                      id="Name_Last"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="Email">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  name="Email"
                  id="Email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="Dropdown">
                  Service Required <span className="required">*</span>
                </label>
                <select name="Dropdown" id="Dropdown" required>
                  <option value="-Select-">-Select-</option>
                  <option value="AI Security">AI Security</option>
                  <option value="Cloud Security">Cloud Security</option>
                  <option value="Penetration Testing / Red Team">Penetration Testing / Red Team</option>
                  <option value="Social Engineering">Social Engineering</option>
                  <option value="Training">Training</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="MultiLine">
                  Tell us more about your requirement
                </label>
                <textarea
                  name="MultiLine"
                  id="MultiLine"
                  rows="5"
                  placeholder="Describe your security needs..."
                ></textarea>
              </div>

              <button type="submit" className="cta-button">
                Submit
              </button>

              <p className="submission-info">
                Submissions remaining: {2 - submissionCount}/2
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
