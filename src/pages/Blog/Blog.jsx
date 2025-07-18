import '../About/About.css';

const Blog = () => {
  return (
    <main className="page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Cleaning Tips & News</h1>
          <p className="page-description">
            Expert cleaning advice and company updates from Suffolk Cleaning Hub
          </p>
        </div>
        
        <div className="page-content">
          <section className="content-section">
            <h2>Coming Soon</h2>
            <p>
              We're working on bringing you valuable cleaning tips, seasonal advice, 
              and company news. Check back soon for our latest blog posts!
            </p>
          </section>
          
          <section className="content-section">
            <h2>What to Expect</h2>
            <ul className="features-list">
              <li>Seasonal cleaning tips and checklists</li>
              <li>Product recommendations and reviews</li>
              <li>Before and after case studies</li>
              <li>Company news and updates</li>
              <li>Special offers and promotions</li>
            </ul>
          </section>
          
          <section className="content-section">
            <h2>Stay Updated</h2>
            <p>
              In the meantime, follow us on social media or contact us directly 
              for any cleaning questions or advice you need.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Blog;