
import Card from "./Card";
import "./style.css";

export default function CardMovie(props) {


  return (
    <div className={`cardContainer ${props.type}`}>
      <Card {...props}/>
    </div>
  );
}
