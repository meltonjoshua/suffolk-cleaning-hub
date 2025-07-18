import '../About/About.css';

const Services = () => {
  return (
    <main className="page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Our Services</h1>
          <p className="page-description">
            Comprehensive cleaning solutions for homes and businesses across Suffolk
          </p>
        </div>
        
        <div className="page-content">
          <section className="content-section">
            <h2>Residential Cleaning</h2>
            <p>
              Keep your home spotless with our professional residential cleaning services. 
              We offer regular cleaning, deep cleaning, and one-off services to suit your needs.
            </p>
          </section>
          
          <section className="content-section">
            <h2>Commercial Cleaning</h2>
            <p>
              Maintain a professional environment with our commercial cleaning services. 
              We work with offices, retail spaces, and various business premises.
            </p>
          </section>
          
          <section className="content-section">
            <h2>End of Tenancy Cleaning</h2>
            <p>
              Moving out? Our comprehensive end of tenancy cleaning ensures you get your 
              deposit back and leaves the property perfect for new tenants.
            </p>
          </section>
          
          <section className="content-section">
            <h2>Deep Cleaning</h2>
            <p>
              For properties that need extra attention, our deep cleaning service covers 
              every corner, appliance, and surface for a thorough clean.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Services;