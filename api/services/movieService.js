const Movie = require('../models/movie.js');

async function getAllMovies() {
    const movies = await Movie.findAll();

    return movies;
}

async function getMovie(id) {
    const movie = await Movie.findByPk(id);
    if (!movie) {
        throw new Error('Película no encontrada');
    }

    return movie;
}

async function createMovie(body) {
    const newMovie = await Movie.create(body);
    return newMovie;
}

module.exports = {
    getAllMovies,
    getMovie,
    createMovie
}