import { Link } from "react-router-dom";
import "./style.css";

export default function Button({ content, type, needIcon, location }) {
  return (
    <Link to={`/${location}`} href="#" className={`btn btn${type}`}>
      {content}
      {needIcon && <i className="btnIcon"></i>}
    </Link>
  );
}
