import React from 'react'

const Footer = () => {
  const footerLinks = {
    services: [
      'Penetration Testing',
      'Red Teaming',
      'Cloud Security',
      'Social Engineering',
      'AI Security',
      'Specialized Training'
    ],
    company: [
      'About Us',
      'Our Team',
      'Case Studies',
      'Blog',
      'Careers'
    ],
    resources: [
      'Security Whitepapers',
      'Webinars',
      'Security Tools',
      'Vulnerability Database',
      'Security Glossary'
    ]
  }

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-col">
          <div className="logo">
            <i className="fas fa-shield-alt"></i>
            <h1>CIBERES<span>PACIO</span></h1>
          </div>
          <p>Stay Ahead of Threats, Stay Secure</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-keybase"></i></a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul className="footer-links">
            {footerLinks.services.map((link, index) => (
              <li key={index}><a href="#">{link}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul className="footer-links">
            {footerLinks.company.map((link, index) => (
              <li key={index}><a href="#">{link}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>Resources</h4>
          <ul className="footer-links">
            {footerLinks.resources.map((link, index) => (
              <li key={index}><a href="#">{link}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2025 Ciberespacio Security. All rights reserved. | Operates under strict legal and ethical guidelines</p>
      </div>
    </footer>
  )
}

export default Footer
