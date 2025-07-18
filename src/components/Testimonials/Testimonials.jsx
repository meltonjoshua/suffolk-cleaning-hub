import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Ipswich',
      service: 'Weekly Cleaning',
      rating: 5,
      text: 'Suffolk Cleaning Hub has been amazing! They\'re reliable, thorough, and always professional. My house has never looked better.',
      image: '👩'
    },
    {
      name: 'David Miller',
      location: 'Felixstowe',
      service: 'End of Tenancy',
      rating: 5,
      text: 'Got my full deposit back thanks to their incredible end of tenancy clean. Would definitely recommend to anyone moving out.',
      image: '👨'
    },
    {
      name: 'Emma Thompson',
      location: 'Woodbridge',
      service: 'Deep Cleaning',
      rating: 5,
      text: 'Exceptional service from start to finish. The team went above and beyond to ensure every corner was spotless. Highly recommended!',
      image: '👩‍💼'
    }
  ];

  const trustBadges = [
    { icon: '🛡️', text: 'Fully Insured' },
    { icon: '⭐', text: '5-Star Rated' },
    { icon: '✅', text: 'Bonded & Vetted' },
    { icon: '🌱', text: 'Eco-Friendly' },
    { icon: '⚡', text: 'Same Day Service' },
    { icon: '💯', text: 'Satisfaction Guaranteed' }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i} 
        className={`star ${i < rating ? 'star--filled' : 'star--empty'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-description">
            Don't just take our word for it - hear from our satisfied customers 
            across Suffolk
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="customer-avatar">
                  <span>{testimonial.image}</span>
                </div>
                <div className="customer-info">
                  <h4 className="customer-name">{testimonial.name}</h4>
                  <p className="customer-location">{testimonial.location}</p>
                  <p className="service-type">{testimonial.service}</p>
                </div>
              </div>
              
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="testimonial-text">
                "{testimonial.text}"
              </blockquote>
            </div>
          ))}
        </div>
        
        <div className="trust-section">
          <h3 className="trust-title">Why Choose Suffolk Cleaning Hub?</h3>
          <div className="trust-badges">
            {trustBadges.map((badge, index) => (
              <div key={index} className="trust-badge">
                <span className="trust-icon">{badge.icon}</span>
                <span className="trust-text">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="testimonials-cta">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Experience the Difference?</h3>
            <p className="cta-description">
              Join hundreds of satisfied customers across Suffolk
            </p>
            <div className="cta-actions">
              <a href="/contact" className="btn btn-primary btn-large">
                Get Your Free Quote
              </a>
              <a href="tel:+441473123456" className="btn btn-secondary btn-large">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;