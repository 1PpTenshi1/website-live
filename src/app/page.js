import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h2>BEST DESTINATIONS AROUND THE PHILIPPINES</h2>
              <h1>
                Travel, <span>enjoy</span> and discover Philippines!
              </h1>
              <p>
                Discover the beauty of the Philippines with us, your ultimate travel partner for
                unforgettable adventures!
              </p>
              <button className="btn">Find out more</button>
            </div>
            <div className="hero-image">
              <img src= "/images/Hero.png" alt="Traveler" />
            </div>
          </div>
        </section>

        {/* Top Destinations */}
        <section className="top-destinations">
          <h2>Top Destinations</h2>
          <div className="destination-list">
            <div className="destination-card">
              <img src="/images/Boracay.png" alt="Boracay" />
              <h3>Boracay, Aklan</h3>
              <p>5 Days Trip</p>
            </div>
            <div className="destination-card">
              <img src="/images/Palawan.png" alt="Palawan" />
              <h3>Coron, Palawan</h3>
              <p>4 Days Trip</p>
            </div>
            <div className="destination-card">
              <img src="/images/ChinaTown.png" alt="Manila" />
              <h3>Chinatown, Manila</h3>
              <p>3 Days Trip</p>
            </div>
          </div>
        </section>

        {/* Food Recommendation */}
        <section className="food-recommendation">
          <h2>Food Recommendation</h2>
          <div className="food-list">
            <div className="food-card">
              <img src="/images/Chicharon.png" alt="Chicharon" />
              <h3>Chicharon</h3>
              <p>Best pork belly</p>
            </div>
            <div className="food-card">
              <img src="/images/bananaq.png" alt="Banana Cue" />
              <h3>Banana Cue</h3>
              <p>Caramelized banana skewers</p>
            </div>
            <div className="food-card">
              <img src="/images/daing.png" alt="Adobo" />
              <h3>Adobo</h3>
              <p>Dried Fish</p>
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="subscribe-section">
          <div className="subscribe-content">
            <h2>
              Subscribe to get information, latest news and other interesting offers about Jadoo
            </h2>
            <form className="subscribe-form">
              <input type="email" placeholder="Your Email" />
              <button className="btn">Subscribe</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
