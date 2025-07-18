import { Link } from 'react-router-dom';
import './ServiceCards.css';

const ServiceCards = () => {
  const services = [
    {
      title: 'Residential Cleaning',
      description: 'Regular house cleaning, one-off deep cleans, and maintenance services for your home.',
      features: ['Weekly/Bi-weekly cleaning', 'Deep cleaning', 'Move-in/out cleaning', 'Post-construction cleanup'],
      icon: '🏠',
      color: 'blue'
    },
    {
      title: 'Commercial Cleaning',
      description: 'Professional office and business cleaning services to maintain a pristine work environment.',
      features: ['Office cleaning', 'Retail spaces', 'Medical facilities', 'Educational institutions'],
      icon: '🏢',
      color: 'teal'
    },
    {
      title: 'End of Tenancy',
      description: 'Comprehensive cleaning to ensure you get your deposit back and properties are rent-ready.',
      features: ['Full property clean', 'Kitchen deep clean', 'Bathroom sanitization', 'Deposit guarantee'],
      icon: '🔑',
      color: 'orange'
    },
    {
      title: 'Deep Cleaning',
      description: 'Intensive cleaning service for properties that need extra attention and thorough sanitization.',
      features: ['Top-to-bottom clean', 'Appliance cleaning', 'Window cleaning', 'Carpet cleaning'],
      icon: '✨',
      color: 'purple'
    }
  ];

  return (
    <section className="service-cards" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Cleaning Services</h2>
          <p className="section-description">
            Professional cleaning solutions tailored to your specific needs, 
            delivered with care and attention to detail
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className={`service-card service-card--${service.color}`}>
              <div className="service-header">
                <div className="service-icon">
                  <span>{service.icon}</span>
                </div>
                <h3 className="service-title">{service.title}</h3>
              </div>
              
              <div className="service-body">
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      <span className="feature-check">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="service-footer">
                <Link to="/contact" className="service-btn">
                  Get Quote
                </Link>
                <Link to="/services" className="service-link">
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <div className="cta-content">
            <h3 className="cta-title">Need a Custom Cleaning Solution?</h3>
            <p className="cta-description">
              We offer flexible cleaning packages tailored to your specific requirements. 
              Contact us for a personalized quote.
            </p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Get Custom Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;