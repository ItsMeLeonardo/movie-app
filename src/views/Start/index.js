import { useEffect } from "react";
import shallow from "zustand/shallow";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import SearchInput from "../../components/SearchInput";
import useMovieStore from "../../zustand/stores/movie";


import "./style.css";

export default function Start() {
  const staticID = 399566;

  const getMovie = useMovieStore((state) => state.getMovieDetails, shallow);

  useEffect(() => {
    getMovie(staticID);
  }, []);

  return (
    <main className="mainContainer">
      <Logo />
      <SearchInput />
      <span className="smallTxt">Write the title of your movie</span>
      <Button
        content="Go to Home"
        type="Primary"
        needIcon={true}
        location="home"
      />
    </main>
  );
}
