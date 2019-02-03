import Link from "next/link";

const Nav = params => (
  <div>
    <Link href="/">
      <a>Home!</a>
    </Link>
    <Link href="/sell">
      <a>Sell!</a>
    </Link>
  </div>
);

export default Nav;
