import { useEffect } from "react";
import { useParams } from "react-router";
import shallow from "zustand/shallow";
import Button from "../../components/Button";
import Navbar from "../../components/NavBar/navbar";
import useMovieStore from "../../zustand/stores/movie";
import Stats from "./components/Stats";

import "./style.css";

export default function Detail() {

  const {id} = useParams()

  //TODO: continue here
  function getDataFromStore(state) {
    return {
      getDetails: state.getMovieDetails,
      movieDetail: state.movieDetail,
      isLoading: state.isLoading,
      hasError: state.hasError,
      errorMessage: state.errorMessage,
    };
  }
  const { getDetails, movieDetail, isLoading, hasError, errorMessage } =
    useMovieStore(getDataFromStore, shallow);

  useEffect(() => {
    getDetails(id)
  }, [])

  return (
    <section className="container">
      <Navbar />
      <img className="detailImage" src={movieDetail.backdrop_path} />
      <main className="main">
        <div className="detailName">
          <h1 className="titleMovie">{movieDetail.original_title}</h1>
          <div className="detailButtons">
            <Button content="See trailer" type="White" />
            <Button content="See movie" type="Secondary" />
          </div>
        </div>
        <div className="detailInfo">
          <div className="detailDescription">
            <header className="detailHeader">Description</header>
            <p className="description">{movieDetail.overview}</p>
          </div>
          <div className="detailStats">
            <header className="detailHeader">Stats</header>
            <div className="stats">
              <Stats title="Release Date" data={movieDetail.release_date} />
              <Stats title="Popularity" data={movieDetail.popularity} />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
