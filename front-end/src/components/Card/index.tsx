import "./styles.scss";

type CardProps = {
  src: string;
  title: string;
  cost: number;
};
function convertPrice(price: number) {
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
function Card({ src, title, cost }: CardProps) {
  const price = convertPrice(cost);
  return (
    <section className="Card">
      <article>
        <figure className="Card-figure">
          <img className="Card-image" src={src} alt={title} />
          <figcaption className="Card-figcaption">
            <h3 className="Card-title">{title}</h3>
            <hr className="Card-line" />
            <span className="Card-cost">{price}</span>
          </figcaption>
        </figure>
      </article>
    </section>
  );
}
export default Card;
