import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      text: "Ciberespacio Security exposed critical vulnerabilities in our infrastructure that other firms missed. Their red team simulation was the most realistic we've ever experienced.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Michael Reynolds",
      position: "CTO, FinTech Global"
    },
    {
      text: "The social engineering assessment revealed significant gaps in our employee awareness. The remediation plan they provided was comprehensive and actionable.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Sarah Johnson",
      position: "CISO, HealthPlus Systems"
    },
    {
      text: "Working with Ciberespacio Security helped us achieve compliance with multiple regulatory frameworks while significantly improving our security posture.",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      name: "David Chen",
      position: "Security Director, National Bank"
    }
  ]

  return (
    <section id="testimonials" className="testimonials">
      <div className="section-title">
        <h2>Client Testimonials</h2>
        <p>What industry leaders say about our services</p>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>"{testimonial.text}"</p>
            <div className="client">
              <img src={testimonial.image} alt={testimonial.name} />
              <div>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
