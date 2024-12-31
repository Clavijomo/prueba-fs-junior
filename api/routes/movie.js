const express = require('express');
const router = express.Router();
const movieService = require('../services/movieService.js');
const movieSchema = require('../schemas/movieSchema.js');

router.get('/', async (req, res, next) => {
    try {
        const movie = await movieService.getAllMovies();
        res.json(movie);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;

        if (isNaN(id)) {
            return res.status(400).json({ error: "El ID debe ser un número" });
        }

        const movieDetail = await movieService.getMovie(id);
        res.json(movieDetail);

    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const moviePost = await movieSchema.validateAsync(req.body);
        await movieService.createMovie(moviePost);
        res.status(201).json({ message: "Pelicula creada exitosamente" });
    } catch (error) {
        next(err);
    }
})

module.exports = router;