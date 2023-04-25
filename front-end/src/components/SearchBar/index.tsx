import "./styles.scss";
import iconSearch from "../../assets/icons/search-icon.svg";

function SearchBar() {
  return (
    <div className="SearchBar">
      <input className="SearchBar-input" type="text" placeholder="Pesquisar" />
      <img className="SearchBar-icon" src={iconSearch} alt="Icone de lupa" />
    </div>
  );
}

export default SearchBar;
