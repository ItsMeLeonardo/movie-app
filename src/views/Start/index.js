import Button from "../../components/Button";
import Logo from "../../components/Logo";
import SearchInput from "../../components/SearchInput";

import "./style.css";

export default function Start() {
  return (
    <>
      <Logo/>
      <SearchInput/>
      <span className="smallTxt">Write the title of your movie</span>
      <Button type="Primary" needIcon={true} location="home"/>
    </>
  )
} 