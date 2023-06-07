const Bootcamp = require("../models/Bootcamp");
const ErroResponse = require("../utilies/errorResponse");
const asyncHandler = require("../middleware/async");

// @decs get all the bootcamp
// @access public
// @routes get/api/v1/bootcamps

exports.getBootcamps = asyncHandler(async (req, res, next) => {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({
        sucess: true,
        count: bootcamps.length,
        data: bootcamps,
    });
});

// @decs get the bootcamp
// @access private
// @routes get/api/v1/bootcamps/:id

exports.getBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
        return next(
            new ErroResponse(
                `bootcamp not found with id of ${req.params.id} `,
                404
            )
        );
    }
    res.status(200).json({
        sucess: true,
        data: bootcamp,
    });

    // res.status(501).json({
    //     sucess: false,
    //     msg: ` cannot Show a single  bootcamps ${req.params.id}`,
    // });
    // next(
    //     new ErroResponse(
    //         `bootcamp not found with id of ${req.params.id} `,
    //         404)
});

// @decs post  the bootcamp
// @access private
// @routes post/api/v1/bootcamps

exports.postBootcamps = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({ sucess: true, data: bootcamp });
});

// @decs put   the bootcamp
// @access private
// @routes put/api/v1/bootcamps/:id

exports.putBootcamps = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!bootcamp) {
        return next(
            new ErroResponse(
                `Bootcamp not found with id of ${req.params.id}`,
                404
            )
        );
    }

    res.status(200).json({
        sucess: true,
        data: bootcamp,
    });
});

// @decs delete  the bootcamp
// @access private
// @routes delete/api/v1/bootcamps/:id
exports.deleteBootcamps = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
        return res.status(400).json({ sucess: false });
    }
    res.status(200).json({
        sucess: true,
        data: {},
    });
});
