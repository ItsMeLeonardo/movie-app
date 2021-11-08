import { Link } from "react-router-dom";
import Logo from "../Logo";
import SearchInput from "../SearchInput";

import "./style.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/home">
        <Logo className="navbarLogo" size="small" />
      </Link>
      <SearchInput className="navbarSearch" size="small" />
      <div style={{ opacity: 0 }}></div>
    </nav>
  );
}
