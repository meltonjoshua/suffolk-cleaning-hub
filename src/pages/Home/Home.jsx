import Hero from '../../components/Hero';
import ServiceAreas from '../../components/ServiceAreas';
import ServiceCards from '../../components/ServiceCards';
import Testimonials from '../../components/Testimonials';

const Home = () => {
  return (
    <main>
      <Hero />
      <ServiceAreas />
      <ServiceCards />
      <Testimonials />
    </main>
  );
};

export default Home;