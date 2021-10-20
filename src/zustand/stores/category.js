import create from "zustand/vanilla";
import callApi, { getHeaders } from "../../api";

const useCategoryStore = create((set) => ({
  getCategories: async () => {
    try {
      set({
        isLoading: false,
        errorMessage: "",
        hasError: false,
      })

      const params = {
        url: 'https://advanced-movie-search.p.rapidapi.com/genre/movie/list',
        headers: getHeaders()
      }

      const categories = await callApi(params)
      set({categories: categories.genres})

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
