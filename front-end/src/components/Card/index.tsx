type ImageProps = {
  src: string;
  title: string;
  cost: number;
};
function Card(props: ImageProps) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h1>{props.cost}</h1>
      <img src={props.src} alt="" />
      <h1></h1>
    </div>
  );
}
export default Card;
