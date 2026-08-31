import React from 'react'

const Services = () => {
  const services = [
    {
      icon: 'fas fa-bug',
      title: 'Penetration Testing',
      description: 'Simulate real-world attacks to identify vulnerabilities in your systems, networks, and applications.',
      link: 'penetration-testing.html'
    },
    {
      icon: 'fas fa-user-secret',
      title: 'Red Team Operations',
      description: 'Full-scale adversarial simulation to test your people, processes, and technology against advanced threats.',
      link: 'red-team-operations.html'
    },
    {
      icon: 'fas fa-lock',
      title: 'Social Engineering',
      description: 'Test human vulnerabilities through phishing, vishing, and physical security assessments.',
      link: 'social-engineering.html'
    },
    {
      icon: 'fas fa-robot',
      title: 'AI Security',
      description: 'Harness the power of artificial intelligence securely. We safeguard AI models and data pipelines from adversarial threats.',
      link: 'ai-security.html'
    },
    {
      icon: 'fas fa-cloud',
      title: 'Cloud Security',
      description: 'Specialized testing for AWS, Azure, and GCP environments to secure your cloud assets.',
      link: 'cloud-security.html'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Specialized Training',
      description: 'Upskill your teams with immersive, adversary-centric training aligned to your threat environment.',
      link: 'specialized-training.html'
    }
  ]

  return (
    <section id="services">
      <div className="section-title">
        <h2>Our Services</h2>
        <p>Comprehensive security solutions tailored to your organization's unique challenges</p>
      </div>
      <div className="services-grid">
        <div className="service-card-row">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="service-card"
              onClick={() => window.location.href = service.link}
            >
              <i className={service.icon}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <div className="service-card-row">
          {services.slice(3, 6).map((service, index) => (
            <div
              key={index + 3}
              className="service-card"
              onClick={() => window.location.href = service.link}
            >
              <i className={service.icon}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
