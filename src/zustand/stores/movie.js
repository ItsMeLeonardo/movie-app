import create from "zustand";
import callApi, { getHeaders } from "api";

/**
 *
 * @param {String} type - type of search by [name] or [genres|category]
 * @param {String} param - search param [name of movie] or [id of genre]
 * @param {Number} page - number of pages default 1
 * @returns
 */
const getUrlByType = (type, param, page = 1) => {
  return type === "name"
    ? `https://advanced-movie-search.p.rapidapi.com/search/movie?query=${param}&page=${page}`
    : `https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=${param}&page=${page}`;
};

const useMovieStore = create((set, get) => ({
  getMovies: async (nameOrId, type = "name") => {
    try {
      set({
        isLoading: true,
        errorMessage: "",
        hasError: false,
      });

      const params = {
        url: getUrlByType(type, nameOrId),
        headers: getHeaders(),
      };

      const movieResults = await callApi(params);

      set({ movies: movieResults.results });
    } catch (error) {
      set({
        movies: [],
        isLoading: true,
        errorMessage: "unKnow error 😫",
        hasError: true,
        page: 1,
      });
    } finally {
      set({ isLoading: false });
    }
  },

  getMovieDetails: async (id) => {
    if (!id) return;

    try {
      set({
        isLoading: true,
        errorMessage: "",
        hasError: false,
      });

      const movieDetail = get().movies.find(
        (movie) => movie.id.toString() === id
      );
      if (movieDetail) {
        // console.log("exist");
        set({ movieDetail });
      } else {
        const params = {
          url: `https://advanced-movie-search.p.rapidapi.com/movies/getdetails?movie_id=${id}`,
          headers: getHeaders(),
        };
        // console.log("no exist");
        const movieDetail = await callApi(params);
        set({ movieDetail });
      }
    } catch (error) {
      set({
        movieDetail: {},
        isLoading: true,
        errorMessage: "unKnow error 😫",
        hasError: true,
      });
    } finally {
      set({ isLoading: false });
    }
  },

  nextPage: async (nameOrId, type = "name") => {
    try {
      set({
        // isLoading: true,
        errorMessage: "",
        hasError: false,
      });
      const page = get().page + 1;

      const params = {
        url: getUrlByType(type, nameOrId, page),
        headers: getHeaders(),
      };

      const movieResults = await callApi(params);
      const movies = get().movies.concat(movieResults.results);

      set({ movies, page });
    } catch (error) {
      set({
        movies: [],
        isLoading: true,
        errorMessage: "unKnow error 😫",
        hasError: true,
        page: 1,
      });
    } finally {
      set({ isLoading: false });
    }
  },
  movies: [],
  movieDetail: {},
  isLoading: false,
  errorMessage: "",
  page: 1,
  hasError: false,
}));

export default useMovieStore;
