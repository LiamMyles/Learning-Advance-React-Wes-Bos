import Link from "next/link";

const Nav = params => (
  <div>
    <Link href="/sell">
      <a>Home!</a>
    </Link>
    <Link href="/">
      <a>Sell!</a>
    </Link>
  </div>
);

export default Nav;
