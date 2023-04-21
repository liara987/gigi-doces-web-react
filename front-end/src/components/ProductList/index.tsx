/* eslint-disable no-octal */
import "./index.scss";
import data from '../../../database.json';
import Card from "../Card/index.tsx";

function ProductList() {
  return (
    <main className="ProductList">      
      <Card
        src={data.product01.image}
        cost={data.product01.cost}
        title={data.product01.title}
      />
      <Card
        src={data.product02.image}
        cost={data.product02.cost}
        title={data.product02.title}
      />
      <Card
        src={data.product03.image}
        cost={data.product03.cost}
        title={data.product03.title}
      />
      <Card
        src={data.product04.image}
        cost={data.product04.cost}
        title={data.product04.title}
      />
      <Card
        src={data.product05.image}
        cost={data.product05.cost}
        title={data.product05.title}
      />
      <Card
        src={data.product06.image}
        cost={data.product06.cost}
        title={data.product06.title}
      />
      <Card
        src={data.product07.image}
        cost={data.product07.cost}
        title={data.product07.title}
      />
      <Card
        src={data.product08.image}
        cost={data.product08.cost}
        title={data.product08.title}
      />
      <Card
        src={data.product09.image}
        cost={data.product09.cost}
        title={data.product09.title}
      />
    </main>
  );
}

export default ProductList;
