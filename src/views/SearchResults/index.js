import React, { useEffect, useRef } from "react";
import { useParams } from "react-router";
import Card from "components/CardMovie/Card";
import Navbar from "components/NavBar/navbar";
import Subtitle from "components/Subtitle";
import useMovieStore from "zustand/stores/movie";
import shallow from "zustand/shallow";

import Loading from "components/Loading";
import Error from "components/Error";
import Button from "components/Button";
import { useNearScreen } from "hooks/useNearScreen";
import "./style.css";

/**
 *
 * @param {Object} movie - movie object from API
 * @returns object with leaked information from movie
 */
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

function SearchResults() {
  const { name, idCategory, nameCategory } = useParams();

  function getDataFromStore(state) {
    return {
      getMovies: state.getMovies,
      movies: state.movies,
      isLoading: state.isLoading,
      nextPage: state.nextPage,
      hasError: state.hasError,
      errorMessage: state.errorMessage,
    };
  }

  const { getMovies, movies, isLoading, hasError, errorMessage, nextPage } =
    useMovieStore(getDataFromStore, shallow);

  const externalRef = useRef();

  useEffect(() => {
    //search by name
    if (name) {
      getMovies(name).catch(console.log);
    }
    //search by category
    if (idCategory && nameCategory) {
      getMovies(idCategory, "category").catch(console.log);
    }
  }, []);

  const handleNextPage = () => {
    console.log("click");
    if (name) {
      nextPage(name).catch(console.log);
    }
    if (idCategory && nameCategory) {
      nextPage(idCategory, "category").catch(console.log);
    }
  };

  const { isNearScreen } = useNearScreen({ externalRef, once: false });

  useEffect(() => {
    console.log(isNearScreen);
  }, [isNearScreen]);

  if (hasError) {
    return <Error message={errorMessage} />;
  }

  return (
    <div className="SearchResultContainer">
      <Navbar />
      <Subtitle content={name || nameCategory} />
      <section className="SearchResults">
        {isLoading ? (
          <Loading />
        ) : (
          movies?.map((movie) => (
            <Card key={movie.id} {...getCardProps(movie)} id={movie.id} />
          ))
        )}
      </section>
      <div className="viewer" ref={externalRef} />
      <Button
        content="next page"
        type="Primary"
        normalBtn={true}
        getNextPage={handleNextPage}
      />
    </div>
  );
}

export default SearchResults;
