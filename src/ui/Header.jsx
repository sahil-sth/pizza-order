import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">Pizza App</Link>
      <p>Menu</p>
    </header>
  );
}

export default Header;
