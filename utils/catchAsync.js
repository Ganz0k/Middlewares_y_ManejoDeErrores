module.exports = fn => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};

// const asyncMiddleware = require("../utils/catchAsync");
// app.length("/ruta", asyncMiddleware(async (req, res) => {
//     // lo que se valla ahacer
// }));