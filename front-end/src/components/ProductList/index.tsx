import "./styles.scss";
import data from "../../../database.json";
import Card from "../Card/index.tsx";

function ProductList() {
  return (
    <main className="ProductList">
      {data.map((item, i) => {
        return (
          <Card key={i} src={item.image} cost={item.cost} title={item.title} />
        );
      })}
    </main>
  );
}

export default ProductList;
