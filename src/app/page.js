import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-text">
            <h1>Travel, enjoy, and discover the Philippines!</h1>
            <p>
              Discover the beauty of the Philippines with us, your ultimate travel partner for unforgettable adventures!
            </p>
            <button>Find out more</button>
          </div>
          <div className="hero-image">
            <img src="https://via.placeholder.com/400" alt="Traveler" />
          </div>
        </section>

        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        
        <section className="top-destinations">
          <h2>Top Destinations</h2>
          <div className="destination-list">
            <div className="destination">
              <img src="https://via.placeholder.com/300" alt="Boracay" />
              <h3>Boracay, Aklan</h3>
              <p>5 Days Trip - ₱12,508</p>
            </div>
            <div className="destination">
              <img src="https://via.placeholder.com/300" alt="London" />
              <h3>London, UK</h3>
              <p>17 Days Trip - ₱4.2k</p>
            </div>
            <div className="destination">
              <img src="https://via.placeholder.com/300" alt="Europe" />
              <h3>Full Europe Tour</h3>
              <p>28 Days Trip - ₱15k</p>
            </div>
          </div>
        </section>

        <section className="page-image">
          <img src="images/p1.png" alt="Overview"/>
          <img src="images/testi.png" alt="Testimony"/>
        </section>

        <section className="testimonials">
          <h2>What People Say About Us</h2>
          <div className="testimonial">
            <blockquote>
              "Jadoo has made my trips so much easier. Highly recommend!"
              <footer>- Chris Thomas, CEO of Red Button</footer>
            </blockquote>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
