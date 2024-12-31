const cors = require('cors');
const whiteList = ['http://localhost:5173'];

const corsMiddleware = ({ acceptedOrigins = whiteList } = {}) => cors({
    origin: (origin, callback) => {

        if (acceptedOrigins.includes(origin)) {
            return callback(null, true);
        }

        if (!origin) {
            return callback(null, true);
        }

        return callback(new Error('Not Allowed by CORS'));
    }
})

module.exports = corsMiddleware;