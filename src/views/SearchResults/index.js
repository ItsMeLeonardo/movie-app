import { useParams } from "react-router";
import Card from "../../components/CardMovie/Card";
import Navbar from "../../components/NavBar/navbar";
import Subtitle from "../../components/Subtitle";
import useMovieStore from "../../zustand/stores/movie";
import shallow from "zustand/shallow";

import "./style.css";
import { useEffect } from "react";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

export default function SearchResults() {
  const { name, idCategory, nameCategory } = useParams();

  function getDataFromStore(state) {
    return {
      getMovies: state.getMovies,
      movies: state.movies,
      isLoading: state.isLoading,
      hasError: state.hasError,
      errorMessage: state.errorMessage,
    };
  }

  const { getMovies, movies, isLoading, hasError, errorMessage } =
    useMovieStore(getDataFromStore, shallow);

  useEffect(() => {
    if (name) {
      getMovies(name).catch(console.log);
    }
    if (idCategory && nameCategory) {
      getMovies(idCategory, 'category').catch(console.log); 
    }
  }, []);

  const getCardProps = (movie) => {
    return {
      type: "movie",
      img: movie.poster_path,
      forAdults: movie.adult,
      title: movie.original_title,
      description: movie.popularity,
      id: movie.id,
      iconDescription: true,
    };
  };

  if (hasError) {
    return (
      <Error message={errorMessage}/>
    )
  }

  return (
    <div className="SearchResultContainer">
      <Navbar />
      <Subtitle content={name && nameCategory} />
      {isLoading ? (
        <Loading />
      ) : (
        <section className="SearchResults">
          {movies?.map((movie) => (
            <Card key={movie.id} {...getCardProps(movie)} id={movie.id}/>
          ))}
        </section>
      )}
    </div>
  );
}
