import './ServiceAreas.css';

const ServiceAreas = () => {
  const areas = [
    {
      name: 'Ipswich',
      description: 'Complete cleaning services across Ipswich and surrounding areas',
      coverage: 'Town Centre, Kesgrave, Rushmere St Andrew',
      icon: '🏛️'
    },
    {
      name: 'Felixstowe',
      description: 'Professional cleaning for coastal properties and businesses',
      coverage: 'Seafront, Walton, Trimley St Mary',
      icon: '🌊'
    },
    {
      name: 'Woodbridge',
      description: 'Trusted cleaning services for historic market town properties',
      coverage: 'Town Centre, Melton, Martlesham Heath',
      icon: '🏘️'
    }
  ];

  return (
    <section className="service-areas" id="service-areas">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Areas We Serve</h2>
          <p className="section-description">
            Proudly serving communities across Suffolk with professional 
            cleaning services you can trust
          </p>
        </div>
        
        <div className="areas-grid">
          {areas.map((area, index) => (
            <div key={area.name} className="area-card" data-index={index}>
              <div className="area-icon">
                <span>{area.icon}</span>
              </div>
              <div className="area-content">
                <h3 className="area-name">{area.name}</h3>
                <p className="area-description">{area.description}</p>
                <div className="area-coverage">
                  <span className="coverage-label">Including:</span>
                  <span className="coverage-areas">{area.coverage}</span>
                </div>
              </div>
              <div className="area-action">
                <button className="area-btn" aria-label={`Get quote for ${area.name}`}>
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="service-areas-footer">
          <p className="footer-text">
            Don't see your area? <a href="/contact" className="footer-link">Contact us</a> - 
            we may still be able to help!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;