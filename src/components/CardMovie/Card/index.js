import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../style.css";

function Card(props) {
  const {
    type,
    img,
    forAdults,
    title,
    description,
    id,
    iconDescription,
    nameCategory,
  } = props;

  const cardRef = useRef();

  const urlTypes = {
    popular: `/movie/${id}`,
    category: `/byCategory/${id}/${nameCategory}`,
    movie: `/movie/${id}`,
  };

  const handleCardError = () => {
    cardRef.current.classList.add("hidden");
    // (e) => {
    //   e.target.style.display = "none";
    // }
  };

  return (
    <Link
      to={urlTypes[type]}
      className={`card ${type}`}
      data-title={title?.toLowerCase()}
      ref={cardRef}
    >
      {forAdults && <i className={`cardIcon ${type}`}></i>}

      {img && (
        <img
          className={`cardImage ${type}`}
          src={img}
          alt={`thumbnail of ${title}`}
          onError={handleCardError}
        />
      )}

      <h4
        className={`cardTitle ${type} ${
          title?.length > 16 && type !== "popular" && "bigTitleMovie"
        } `}
      >
        {title}
      </h4>

      {description && (
        <p className={`cardDescription ${type}`}>
          {iconDescription && <i className="iconDescription"></i>}
          {description}
        </p>
      )}
    </Link>
  );
}

export default React.memo(Card, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
