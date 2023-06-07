const ErrorResponse = require("../utilies/errorResponse");

const errorHandler = (err, req, res, next) => {
    let error = { ...err }; // error has the property same as the err object.

    error.message = err.message;
    // console.log(err.stack.red);
    console.log(err);

    if (err.name === "CastError") {
        const message = `Bootcamp not found with the ${err.value}`;
        // console.log(err.name);
        // console.log(err.message);

        error = new ErrorResponse(message, 404);
    }
    if (err.code === 11000) {
        const message = "Duplicate Bootcamp";
        error = new ErrorResponse(message, 400);
    }
    if (err.name === "ValidationError") {
        const message = Object.values(err.errors).map((val) => val.message);
        error = new ErrorResponse(message, 400);
    }
    res.status(error.statusCode || 500).json({
        sucess: true,
        error: error.message || "server error",
    });
};
module.exports = errorHandler;
// By writing { ...err }, you are creating a new object that has the same properties and values as the err object.
// This new object, error, is independent of the err object,
// so modifying error will not affect the original err object.
