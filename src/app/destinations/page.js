import Image from "next/image";

export default function Destinations() {
  return (
    <div>
      <header>
        <nav className="nav">
          <ul>
            <li><a href="/" className="no-underline">Home</a></li>
            <li><a href="/foods" className="no-underline">Foods</a></li>
            <li><a href="/about" className="no-underline">About</a></li>
          </ul>
        </nav>
      </header>

    <br /><br /><br /><br />
    <div className="destinations-h2">
    <h2>Delicacies</h2>
    </div>
    <br /> <br />
    <div className="container-destintations">
        <div class="destinations reverse" id="destination">
            <Image src="/images/ChinaTown.png" alt="Chinatown"/>
            <div>
                <p>"Manila Chinatown" also known as Binondo, is the oldest Chinatown in the world, established in 1594. Located in the heart of Manila, it is a bustling district rich with history, culture, and commerce. Binondo is famous for its vibrant atmosphere, colorful streets, and an array of Chinese-Filipino businesses, including shops, markets, and restaurants. The area is a culinary paradise, offering delicious and authentic Chinese food, such as dim sum, noodles, and roasted meats. Notable landmarks include Ongpin Street, the Binondo Church, and the Chinese-Filipino Friendship Arch. Manila Chinatown is a fascinating blend of history and modernity, celebrating the cultural heritage and strong ties between the Chinese and Filipino communities.</p>
            </div>
        </div>
        <div className="destinations">
            <Image src="/images/elnido.png" alt="elnido"/>
            <div>
                <p>"El Nido" located on the northern tip of Palawan Island in the Philippines, is a tropical paradise known for its stunning natural beauty. It boasts dramatic limestone cliffs, crystal-clear turquoise waters, white sandy beaches, and vibrant coral reefs. El Nido is famous for its incredible island-hopping tours, where visitors can explore hidden lagoons, secret beaches, and stunning caves. The area is also a haven for diving and snorkeling enthusiasts, offering a chance to see a diverse array of marine life. With its breathtaking scenery and serene atmosphere, El Nido is a top destination for travelers seeking a slice of paradise.</p>
            </div>
        </div>
        <div className="destinations reverse">
            <Image src="/images/Boracay.png" alt="boracay"/>
            <div>
                <p>"Boracay" is a small island located in the central Philippines, renowned for its stunning white-sand beaches, vibrant nightlife, and crystal-clear waters. The most famous of its beaches is White Beach, a long stretch of powdery sand lined with palm trees, resorts, and restaurants. Boracay offers a variety of water activities such as snorkeling, diving, kiteboarding, and windsurfing. The island is also known for its lively evening scene, with beachfront bars and nightclubs. Whether you're looking for adventure or relaxation, Boracay provides a picturesque and tropical escape that attracts travelers from around the globe.</p>
            </div>
        </div>
      </div>
    </div>
  );
}