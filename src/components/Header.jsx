import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    closeMenu()
    const element = document.querySelector(sectionId)
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
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="logo">
        <i className="fas fa-shield-alt"></i>
        <h1>CIBERES<span>PACIO</span></h1>
      </div>

      <button
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={isMenuOpen ? 'active' : ''}>
        <ul>
          <li><a href="#home" className="active" onClick={(e) => scrollToSection(e, '#home')}>Home</a></li>
          <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Services</a></li>
          <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About</a></li>
          <li><a href="#testimonials" onClick={(e) => scrollToSection(e, '#testimonials')}>Clients</a></li>
          <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a></li>
        </ul>
        <button className="cta-button nav-cta">Get Assessment</button>
      </nav>

      <button className="cta-button desktop-cta">Get Assessment</button>
    </header>
  )
}

export default Header
