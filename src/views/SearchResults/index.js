import { useParams } from "react-router";
import Card from "../../components/CardMovie/Card";
import Navbar from "../../components/NavBar/navbar";
import Subtitle from "../../components/Subtitle";
import useMovieStore from '../../zustand/stores/movie'
import shallow from "zustand/shallow"

import './style.css'
import { useEffect } from "react";

export default function () {

  const {name, idCategory} = useParams();  

  function getDataFromStore(state) {
    return {
      getMovies: state.getMovies,
      movies: state.movies,
      isLoading: state.isLoading,
      hasError: state.hasError,
      errorMessage: state.errorMessage,
    };
  }

  const {getMovies, /* movies, */ isLoading, hasError, errorMessage } = useMovieStore(getDataFromStore, shallow)

  useEffect(() => {
    // getMovies(name).catch(console.log)
  }, [])


  const getCardProps = (movie) => {
    return {
      type: "movie",
      img: movie.poster_path,
      forAdults: movie.adult,
      title: movie.original_title,
      description: movie.popularity,
      id: movie.id,
      iconDescription: true
    };
  }

  const movies = {
    type: "movie",
    img: 'https://image.tmdb.org/t/p/original/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
    forAdults: false,
    title: 'kong',
    description: '125.522',
    id: '8855',
    iconDescription: true
  }

  return (
    <div className="SearchResultContainer">
      <Navbar />
      <Subtitle content={name} />      
      <section className="SearchResults">
        {<Card key={movies.id} {...movies}/>}
      </section>
    </div>
  );
}

/**
 *         { movies?.map(movie => 
          <Card key={movie.id} {...getCardProps(movie)} />
        )}
 */