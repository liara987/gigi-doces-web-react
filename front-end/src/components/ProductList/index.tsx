import "./styles.scss";
import data from "../../../database.json";
import Card from "../Card/index.tsx";

function ProductList() {
  return (
    <main className="ProductList">
      {data.map(({id, image, cost, title}) => {
        return (
          <Card key={id} src={image} cost={cost} title={title} />
        );
      })}
    </main>
  );
}

export default ProductList;
