import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header>
        <nav className="nav">
          <ul>
            <li><a href="/destinations" className="no-underline">Destinations</a></li>
            <li><a href="/foods" className="no-underline">Foods</a></li>
            <li><a href="/about" className="no-underline">About</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h1>
            Travel, <span>enjoy</span>, and discover Philippines!
          </h1>
          <p>
            Discover the beauty of the Philippines with us, your ultimate travel
            partner for unforgettable adventures!
          </p>
          <Link href="/about" className="btn-primary">
            Find Out More
          </Link>
        </div>
        <div className="hero-image">
          <Image src="/images/Hero.png" width={400} height={400} alt="Traveler" />
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">Top Destinations</h2>
          <div className="grid-container">
            <div className="card">
              <Image
                src="/images/Boracay.png"
                width={300}
                height={200}
                alt="Boracay"
              />
              <div className="card-content">
                <h3>Boracay, Aklan</h3>
                <p>5 Days Trip</p>
              </div>
            </div>
            <div className="card">
              <Image
                src="/images/Palawan.png"
                width={300}
                height={200}
                alt="Coron, Palawan"
              />
              <div className="card-content">
                <h3>Coron, Palawan</h3>
                <p>4 Days Trip</p>
              </div>
            </div>
            <div className="card">
              <Image
                src="/images/ChinaTown.png"
                width={300}
                height={200}
                alt="Chinatown, Manila"
              />
              <div className="card-content">
                <h3>Chinatown, Manila</h3>
                <p>2 Days Trip</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">Food Recommendation</h2>
          <div className="grid-container">
            <div className="card">
              <Image
                src="/images/Chicharon.png"
                width={300}
                height={200}
                alt="Chicharon"
              />
              <div className="card-content">
                <h3>Chicharon</h3>
                <p>Fried pork belly</p>
              </div>
            </div>
            <div className="card">
              <Image
                src="/images/bananaq.png"
                width={300}
                height={200}
                alt="Banana Cue"
              />
              <div className="card-content">
                <h3>Bananaque</h3>
                <p>Caramelized bananas</p>
              </div>
            </div>
            <div className="card">
              <Image
                src="/images/daing.png"
                width={300}
                height={200}
                alt="Daing"
              />
              <div className="card-content">
                <h3>Daing</h3>
                <p>Dried fish</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}