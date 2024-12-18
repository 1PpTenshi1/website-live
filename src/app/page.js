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
                Travel, enjoy <br></br>and discover <br></br>Philippines!
              </h1>
              <p>
                Discover the beauty of the Philippines with us, your ultimate travel partner <br></br>for unforgettable adventures! We will make it easy for you to experience <br></br>authentic Filipino culture.
              </p>
              <button className="btn">Find out more</button>
            </div>
            <div className="hero-image">
              <img
                src="/images/traveler.png"
                alt="Traveler with backpack"
                className="hero-right-image"
              />
            </div>
          </div>
        </section>

        <section className="top-destinations">
          <div className="destination-title">
          <h2>Top Destinations</h2>
          </div>
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
          <div className="food-title">
          <h2>Food Recommendation</h2>
          </div>
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
