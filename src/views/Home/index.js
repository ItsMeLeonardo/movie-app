import { useEffect } from "react";
import Subtitle from "components/Subtitle";
import Navbar from "components/NavBar/navbar";
import CardMovie from "components/CardMovie";

import useMovieStore from "zustand/stores/movie";
import shallow from "zustand/shallow";
import useCategoryStore from "zustand/stores/category";
import Card from "components/CardMovie/Card";
import Loading from "components/Loading";
import Error from "components/Error";
import "./style.css";

export default function Home() {
  //getPopular movie
  const movieDetail = useMovieStore((state) => state.movieDetail, shallow);

  function getDataFromStore(state) {
    return {
      getCategories: state.getCategories,
      categories: state.categories,
      isLoading: state.isLoading,
      hasError: state.hasError,
      errorMessage: state.errorMessage,
    };
  }
  //getCategories
  const { getCategories, categories, isLoading, hasError, errorMessage } =
    useCategoryStore(getDataFromStore, shallow);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  if (isLoading) {
    return <Loading />;
  }
  if (hasError) {
    <Error message={errorMessage} />;
  }

  return (
    <section className="Home">
      <Navbar />

      <Subtitle content="Popular movie" />

      <CardMovie
        type="popular"
        img={movieDetail?.backdrop_path}
        title={movieDetail?.original_title}
        description={movieDetail?.overview}
        id={movieDetail?.id}
      />

      <Subtitle content="Categories" />
      <div className="contentCategories">
        {categories?.map((category) => (
          <Card
            key={category.id}
            type="category"
            title={category.name}
            id={category.id}
            nameCategory={category.name}
          />
        ))}
      </div>
    </section>
  );
}
