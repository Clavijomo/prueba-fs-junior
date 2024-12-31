const express = require('express');
const routerAPI = require('./routes/index.js');
const sequelize = require('./config/db.js');
const notFoundHandler = require('./middlewares/notFoundHandler.js');
const errorHandler = require('./middlewares/errorHandler.js');
const app = express();

app.use(express.json())

const PORT = process.env.PORT ?? 4000;

app.get('/', (req, res) => {
    res.status(200).send('HOLA MUNDO');
});

// Routes
routerAPI(app);

// Middlewares
app.use(notFoundHandler)
app.use(errorHandler);

// Connection to DB

(async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Bases de datos conectada');
    } catch (err) {
        console.error('Error al conectarse...:', err);
    }
})();

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});