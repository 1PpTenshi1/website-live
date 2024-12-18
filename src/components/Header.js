import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/app/destinations">Destinations</a></li>
          <li><a href="/hotels">Foods</a></li>
          <li><Link href="/app/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
