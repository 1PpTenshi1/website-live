import Link from "next/link"; // Make sure Link is imported

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <ul>
          <li><Link href="/">Destinations</Link></li>  
          <li><Link href="/foods">Foods</Link></li>      
          <li><a href="/about">About</a></li>      
        </ul>
      </nav>
    </header>
  );
}