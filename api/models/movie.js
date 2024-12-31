const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const Movie = sequelize.define('Movie', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    synopsis: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    cast: {
        type: DataTypes.JSON,
        allowNull: false
    }
}, {
    tableName: "Movies",
    timestamps: false
});

module.exports = Movie;