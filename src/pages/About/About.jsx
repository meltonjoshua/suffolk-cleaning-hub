import './About.css';

const About = () => {
  return (
    <main className="page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">About Suffolk Cleaning Hub</h1>
          <p className="page-description">
            Your trusted cleaning professionals serving Suffolk with pride and excellence
          </p>
        </div>
        
        <div className="page-content">
          <section className="content-section">
            <h2>Our Story</h2>
            <p>
              Suffolk Cleaning Hub was founded with a simple mission: to provide professional, 
              reliable, and affordable cleaning services to homes and businesses across Suffolk. 
              We understand that a clean environment is essential for health, productivity, and peace of mind.
            </p>
          </section>
          
          <section className="content-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Quality</h3>
                <p>We never compromise on the quality of our work</p>
              </div>
              <div className="value-item">
                <h3>Reliability</h3>
                <p>You can count on us to be there when we say we will</p>
              </div>
              <div className="value-item">
                <h3>Trust</h3>
                <p>Fully insured and vetted professionals you can trust</p>
              </div>
            </div>
          </section>
          
          <section className="content-section">
            <h2>Why Choose Us</h2>
            <ul className="features-list">
              <li>Fully insured and bonded cleaning professionals</li>
              <li>Eco-friendly cleaning products and methods</li>
              <li>Flexible scheduling to fit your needs</li>
              <li>100% satisfaction guarantee</li>
              <li>Competitive and transparent pricing</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;