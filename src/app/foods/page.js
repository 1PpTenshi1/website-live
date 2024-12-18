import Image from "next/image";

export default function Foods() {
  return (
    <div className="foods-container">
      <header>
        <nav className="nav">
          <ul>
            <li><a href="/" className="no-underline">Home</a></li>
            <li><a href="/destinations" className="no-underline">Destinations</a></li>
            <li><a href="/about" className="no-underline">About</a></li>
          </ul>
        </nav>
      </header>

      <div className="food-title">
        <h2>Delicacies</h2>
      </div>
      <div className="container-foods">
        <div className="delicacy reverse">
          <Image src="/images/Chicharon.png" alt="Chicharon" width={300} height={200} />
          <div className="text-content">
            <p>
              "Chicharon," also known as chicharrón, is a popular Filipino snack made from fried pork rinds. 
              This crispy treat is enjoyed across the Philippines and often comes in various forms, 
              such as pork skin, chicken skin, or even fish skin. It's typically seasoned with salt and 
              sometimes vinegar or garlic to enhance its flavor.
            </p>
          </div>
        </div>

        <div className="delicacy">
          <Image src="/images/bananaq.png" alt="Sugar-coated Bananas" width={300} height={200} />
          <div className="text-content">
            <p>
              "Sugar-coated bananas" are a delightful treat enjoyed in many parts of the world, including 
              the Philippines. They are made by coating banana slices with a sweet sugar glaze and frying 
              them until golden, creating a crunchy exterior and soft, flavorful interior.
            </p>
          </div>
        </div>

        <div className="delicacy reverse">
          <Image src="/images/daing.png" alt="Daing na Bangus" width={300} height={200} />
          <div className="text-content">
            <p>
              "Daing na bangus" is a Filipino dish made from marinated milkfish. The milkfish is butterflied 
              and marinated in vinegar, garlic, and peppercorns, then fried or grilled. This dish is often 
              served with rice and dipping sauce, offering a tangy and savory flavor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
