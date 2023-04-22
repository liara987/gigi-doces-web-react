import "./styles.scss";

function SearchBar() {
  return (
    <div className="SearchBar">
      <input className="SearchBar-input" type="text" placeholder="Pesquisar" />
      <svg
        className="SearchBar-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="11.059"
          cy="11.0586"
          r="7.06194"
          stroke="#737380"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.0034 20.0033L16.0518 16.0517"
          stroke="#737380"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default SearchBar;
