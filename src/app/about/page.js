import Image from "next/image";

export default function About() {
  return (
    <div>
      {/* Header */}
      <header>
        <nav className="nav">
          <ul>
            <li><a href="/" className="no-underline">Home</a></li>
            <li>Destinations</li>
            <li>Foods</li>
          </ul>
        </nav>
      </header>

      {/* Hero Section with Picture */}
      <section className="about-section">
        <Image
          src="/images/Palawan.png" 
          alt="About Us"
          width={1000}  
          height={500}  
        />
        <div className="about-content">
          <h1>About Us <span>and Our Service</span></h1>
          <p>
            At Jadoo, we aim to inspire people to explore the beauty, culture, and rich history of the Philippines.
          </p>
          <p>
            We are passionate about making every trip memorable and enriching. Our goal is to provide you with the ultimate
            travel guide—easy, exciting, and informative.
          </p>
          <p><strong>Join us and start your adventure today!</strong></p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <h2 className="section-title">Why Travel with Jadoo?</h2>
          <div className="grid-container">
            <div className="card">
              <Image
                src="/images/Boracay.png"
                alt="Boracay Beach"
                width={300}
                height={200}
              />
              <div className="card-content">
                <h3>Top Destinations</h3>
                <p>Explore the Philippines' most iconic destinations, from tropical beaches to breathtaking mountains.</p>
              </div>
            </div>
            <div className="card">
              <Image
                src="/images/Filipino food.png"
                alt="Filipino Cuisine"
                width={300}
                height={200}
              />
              <div className="card-content">
                <h3>Authentic Experiences</h3>
                <p>Indulge in authentic Filipino cuisine and cultural experiences you can't find anywhere else.</p>
              </div>
            </div>
            <div className="card">
              <Image
                src="/images/Adventure.png"
                alt="Adventure Activities"
                width={300}
                height={200}
              />
              <div className="card-content">
                <h3>Adventure Awaits</h3>
                <p>Whether it's diving in Palawan or hiking in Banaue, Jadoo brings you the best adventure activities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="our-vision">
        <div className="container">
          <h2 className="section-title">Our Vision</h2>
          <p>
            Our vision at Jadoo is to make travel accessible, fun, and enriching for everyone. We believe that exploring new places
            should be a seamless experience that is filled with discovery, learning, and excitement. Through Jadoo, we aim to bring
            the wonders of the Philippines closer to travelers, helping them create unforgettable memories.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="grid-container">
            <div className="card">
              <Image
                src="/images/John.png"
                alt="John"
                width={300}
                height={200}
              />
              <div className="card-content">
                <h3>John, Your Local Guide</h3>
                <p>With over 10 years of travel experience, John is your local guide to the hidden gems of the Philippines.</p>
              </div>
            </div>
            <div className="card">
              <Image
                src="/images/Sarah.png"
                alt="Sarah"
                width={300}
                height={200}
              />
              <div className="card-content">
                <h3>Sarah, Adventure Expert</h3>
                <p>Sarah has a passion for outdoor adventures, and she’ll help you make the most of your Philippine travels.</p>
              </div>
            </div>
            <div className="card">
              <Image
                src="/images/Carlos.png"
                alt="Carlos"
                width={300}
                height={200}
              />
              <div className="card-content">
                <h3>Carlos, Culture Enthusiast</h3>
                <p>Carlos offers deep insights into the history, art, and culture of the Philippines, helping you understand the country's rich heritage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <h4>Jadoo.</h4>
        <p>Your trip guide in minutes, get full control for much longer.</p>
      </footer>
    </div>
  );
}