import React from 'react'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h2>Advanced <span>Red Teaming</span> for Modern Threats</h2>
        <p>
          We simulate sophisticated cyber attacks to expose vulnerabilities before real adversaries do.
          Protect your organization with elite security testing.
        </p>
        <button className="cta-button" onClick={scrollToContact}>Request Assessment</button>
      </div>
    </section>
  )
}

export default Hero
