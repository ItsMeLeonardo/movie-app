import { Link } from "react-router-dom";
import "./style.css";

export default function Button({
  content,
  type,
  needIcon,
  location,
  normalBtn,
}) {
  if (normalBtn) {
    return (
      <button className={`btn btn${type}`}>
        {content}
        {needIcon && <i className="btnIcon"></i>}
      </button>
    );
  }

  return (
    <Link to={`/${location}`} className={`btn btn${type}`}>
      {content}
      {needIcon && <i className="btnIcon"></i>}
    </Link>
  );
}
