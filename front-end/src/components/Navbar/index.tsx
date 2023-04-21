import "./index.scss";
import logo from "../../assets/logo-inline.png";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li className="logo">
          <img src={logo} alt="Logo Gigi Doces Lembranças" />
        </li>
        <li className="searchBar">SearchBar</li>
        <li className="shoppingCart">ShoppingCart</li>
      </ul>
    </nav>
  );
}

export default Navbar;
