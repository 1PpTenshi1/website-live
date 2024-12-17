import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
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
             <img src="/images/traveler.png" alt="Placeholder for the Philippines destination" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
            </div>
          </div>
        </section>

        <section className="top-destinations">
          <h2>Top Destinations</h2>
          <div className="destination-list">
            <div className="destination-card">
              <img src="/images/Boracay.png" alt="Boracay" />
            </div>
            <div className="destination-card">
              <img src="/images/Palawan.png" alt="Palawan" />
            </div>
            <div className="destination-card">
              <img src="/images/ChinaTown.png" alt="Manila" />
            </div>
          </div>
        </section>

        <section className="food-recommendation">
          <h2>Food Recommendation</h2>
          <div className="food-list">
            <div className="food-card">
              <img src="/images/Chicharon.png" alt="Chicharon" />
            </div>
            <div className="food-card">
              <img src="/images/bananaq.png" alt="Banana Cue" />
            </div>
            <div className="food-card">
              <img src="/images/daing.png" alt="Adobo" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
