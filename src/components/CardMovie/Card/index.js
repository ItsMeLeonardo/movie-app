import { Link } from "react-router-dom";
import '../style.css'

export default function Card(props) {
  const { type, img, forAdults, title, description, id, iconDescription } = props;

  const urlTypes = {
    popular: `/movie/${id}`,
    category: `/byCategory/${id}`,
    movie: `/movie/${id}`
  }

  return (
    <Link
      to={urlTypes[type]}
      className={`card ${type}`}
      data-title={title?.toLowerCase()}
    >
      {forAdults && <i className={`cardIcon ${type}`}></i>}

      {img && (
        <img
          className={`cardImage ${type}`}
          src={img}
          alt={`thumbnail of ${title}`}
        />
      )}

      <h4 className={`cardTitle ${type}`}>{title}</h4>

      {description && (
        <p className={`cardDescription ${type}`}>
          {iconDescription && <i className="iconDescription"></i>}
          {description}
        </p>
      )}
    </Link>
  );
}
