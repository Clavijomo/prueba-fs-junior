import apiClient from "../api/client"

export const moviesServices = {
    getAllMovies: async () => {
        const response = await apiClient.get('/movies');
        return response.data;
    },

    getMovieById: async (id) => {
        const response = await apiClient.get(`/movies/${id}`);
        return response.data;
    },

    createMovie: async (movieData) => {
        const response = await apiClient.post('/movies', movieData);
        return response.data;
    }
}