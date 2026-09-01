import React from 'react'

const About = () => {
  const stats = [
    { number: '200+', label: 'Successful Engagements' },
    { number: '98%', label: 'Client Retention' },
    { number: '5000+', label: 'Vulnerabilities Discovered' },
    { number: '0', label: 'Security Breaches Post-engagement' }
  ]

  return (
    <section id="about">
      <div className="section-title">
        <h2>About Us</h2>
        <p>Elite security professionals with decades of combined experience</p>
      </div>
      <div className="about-content">
        <div className="about-text">
          <h3>Stay Ahead of Threats, Stay Secure</h3>
          <p>
            Ciberespacio Security was founded by elite cybersecurity professionals and experienced cyber
            operatives with deep expertise in offensive security.
          </p>
          <p>
            Our AI Security services include comprehensive vulnerability assessments, adversarial testing, and
            AI-driven defense strategies. We align with leading standards such as NIST AI RMF, OWASP Top 10 for
            LLMs, and MITRE ATLAS to ensure robust, resilient, and trustworthy AI systems.
          </p>
          <p>
            We deliver advanced AI Security services—including vulnerability assessments, adversarial testing,
            and AI-driven defense integration—aligned with NIST AI RMF, OWASP Top 10 for LLMs, and MITRE ATLAS
            to ensure resilient and trustworthy AI systems.
          </p>
          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-box">
                <h4>{stat.number}</h4>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="about-image"
          style={{
            backgroundImage: 'url(/images/about.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="hex-code">0xC1PH3R3P0CH</div>
        </div>
      </div>
    </section>
  )
}

export default About
