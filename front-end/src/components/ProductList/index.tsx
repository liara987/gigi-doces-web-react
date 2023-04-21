import "./index.scss";
import data from "../../../database.json";
import Card from "../Card/index.tsx";

function ProductList() {
  return (
    <main className="ProductList">
      {data.map((item) => {
        return <Card src={item.image} cost={item.cost} title={item.title} />;
      })}
    </main>
  );
}

export default ProductList;
