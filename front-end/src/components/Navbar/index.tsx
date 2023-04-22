import "./styles.scss";
import logo from "../../assets/logo-inline.png";
import SearchBar from "./../SearchBar/index";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li className="logo">
          <img src={logo} alt="Logo Gigi Doces Lembranças" />
        </li>
        <li className="searchBar">
          <SearchBar />
        </li>      
      </ul>
    </nav>
  );
}

export default Navbar;
