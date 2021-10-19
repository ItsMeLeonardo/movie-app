import { Link } from "react-router-dom";
import "./style.css";

export default function Button({ type, needIcon, location }) {
  return (
    <Link to={`/${location}`} href="#" className={`btn btn${type}`}>
      Go to Home
      {needIcon && <i className="btnIcon"></i>}
    </Link>
  );
}
