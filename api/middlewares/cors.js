const whiteList = [''];

const options = {
    origin: (origin, callback) => {
        if (whiteList.includes(origin) || !origin) {
            callback(null, true);
            return;
        }

        callback(new Error('No permitido'));
    }
}