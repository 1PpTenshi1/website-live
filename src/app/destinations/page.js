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
            <Image src="/images/Chicharon.png" alt="Chicharon"/>
            <div>
                <p>"Chicharon," also known as chicharrón, is a popular Filipino snack made from fried pork rinds. This crispy treat is enjoyed across the Philippines and often comes in various forms, such as pork skin, chicken skin, or even fish skin. It's typically seasoned with salt and sometimes vinegar or garlic to enhance its flavor. Chicharon is commonly eaten as a snack, paired with dipping sauces like vinegar with chili or soy sauce. It's also used as a topping for various Filipino dishes, adding a delightful crunch to the meal.</p>
            </div>
        </div>
        <div className="destinations">
            <Image src="/images/bananaq.png" alt="Sugar-coated Bananas"/>
            <div>
                <p>"Sugar-coated bananas" are a delightful treat enjoyed in many parts of the world, including the Philippines. They are typically made by coating banana slices with a sweet sugar glaze and then frying them until they become golden and caramelized. This creates a crunchy, sugary exterior while keeping the inside soft and flavorful. These treats are often served as a snack or dessert, providing a perfect combination of sweetness and the natural flavor of bananas. Sometimes, a touch of cinnamon or other spices is added to enhance the taste. They are not only delicious but also easy to make and enjoy!</p>
            </div>
        </div>
        <div className="destinations reverse">
            <Image src="/images/daing.png" alt="Daing na Bangus"/>
            <div>
                <p>"Daing na bangus" is a Filipino dish made from marinated milkfish (bangus). The milkfish is typically butterflied and marinated in a mixture of vinegar, garlic, peppercorns, and salt. This marination process infuses the fish with a tangy and savory flavor. Once marinated, the fish is either fried or grilled until crispy and golden. "Daing na bangus" is often served with a side of rice and a dipping sauce made from vinegar, soy sauce, and chili. It’s a beloved breakfast dish in the Philippines, known for its rich flavors and satisfying texture.</p>
            </div>
        </div>
      </div>
    </div>
  );
}