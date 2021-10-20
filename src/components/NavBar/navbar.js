import Logo from "../Logo";
import SearchInput from "../SearchInput";

import './style.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo className="navbarLogo" size='small'/>
      <SearchInput className="navbarSearch" size='small'/>
      <div style={{opacity: 0}}></div>
    </nav>
  )
}