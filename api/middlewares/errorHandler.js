function errorHandler(err, req, res, next) {
    console.error(err.stack);

    if (err.message === 'Película no encontrada') {
        return res.status(404).json({ error: err.message });
    }

    res.status(err.status || 500).json({
        error: err.message || "Error interno del servidor."
    });
}

module.exports = errorHandler;