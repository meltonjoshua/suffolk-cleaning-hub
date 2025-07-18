import '../About/About.css';

const Contact = () => {
  return (
    <main className="page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-description">
            Get in touch for a free quote or to discuss your cleaning needs
          </p>
        </div>
        
        <div className="page-content">
          <section className="content-section">
            <h2>Get Your Free Quote</h2>
            <p>
              Ready to experience professional cleaning? Contact us today for a free, 
              no-obligation quote tailored to your specific needs.
            </p>
          </section>
          
          <section className="content-section">
            <h2>Contact Information</h2>
            <div className="contact-info">
              <p><strong>Phone:</strong> <a href="tel:+441473123456">01473 123 456</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@suffolkcleaninghub.co.uk">info@suffolkcleaninghub.co.uk</a></p>
              <p><strong>Service Areas:</strong> Ipswich, Felixstowe, Woodbridge and surrounding areas</p>
            </div>
          </section>
          
          <section className="content-section">
            <h2>Business Hours</h2>
            <div className="hours-info">
              <p><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</p>
              <p><strong>Saturday:</strong> 9:00 AM - 4:00 PM</p>
              <p><strong>Sunday:</strong> Emergency services only</p>
            </div>
          </section>
          
          <section className="content-section">
            <h2>Why Choose Us?</h2>
            <ul className="features-list">
              <li>Free quotes and consultations</li>
              <li>Flexible scheduling including weekends</li>
              <li>Same day service available</li>
              <li>Fully insured and bonded</li>
              <li>100% satisfaction guarantee</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Contact;