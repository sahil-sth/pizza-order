import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link to="/" className="tracking-widest">
        Pizza App
      </Link>
      <SearchOrder />
      <p>Menu</p>
    </header>
  );
}

export default Header;
