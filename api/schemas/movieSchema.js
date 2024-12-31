const Joi = require('joi');

const movieSchema = Joi.object({
    title: Joi.string().required(),
    year: Joi.number().integer().min(1900).required(),
    genre: Joi.string().required(),
    synopsis: Joi.string().required(),
    cast: Joi.array().items(Joi.string()).required(),
    image: Joi.string().uri().required(),
});

module.exports = movieSchema;