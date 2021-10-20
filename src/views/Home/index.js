import Subtitle from "../../components/Subtitle";
import Navbar from "../../components/NavBar/navbar";
import CardMovie from "../../components/CardMovie";

import "./style.css";
import useMovieStore from "../../zustand/stores/movie";
import shallow from "zustand/shallow";
import { useEffect } from "react";
import useCategoryStore from "../../zustand/stores/category";
import Card from "../../components/CardMovie/Card";

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
  }, []);

  console.log(categories);
  return (
    <>
      <Navbar />

      <Subtitle content="Popular movie" />
      <CardMovie
        type="popular"
        img={movieDetail.backdrop_path}
        title={movieDetail.original_title}
        description={movieDetail.overview}
      />

      <Subtitle content="Categories" />
      <div className="contentCategories">
        {categories?.map((category) => (
          <Card type="category" title={category.name} />
        ))}
      </div>
    </>
  );
}
