import create from "zustand";
import callApi, { getHeaders } from "api";

const filterCategories = (categories) => {
  const myCategories = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Music",
    "Horror",
  ];

  return categories.filter((category) => myCategories.includes(category.name));
};

const useCategoryStore = create((set) => ({
  getCategories: async () => {
    try {
      set({
        isLoading: true,
        errorMessage: "",
        hasError: false,
      });

      const params = {
        url: "https://advanced-movie-search.p.rapidapi.com/genre/movie/list",
        headers: getHeaders(),
      };

      const categories = await callApi(params);
      set({ categories: filterCategories(categories.genres) });
    } catch (error) {
      set({
        pokemonDetail: {},
        isLoading: true,
        errorMessage: "unKnow error 😫",
        hasError: true,
      });
    } finally {
      set({ isLoading: false });
    }
  },
  categories: [],
  isLoading: false,
  errorMessage: "",
  hasError: false,
}));

export default useCategoryStore;
