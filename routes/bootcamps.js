const express = require("express");

const router = express.Router();

const {
    getBootcamps,
    getBootcamp,
    postBootcamps,
    putBootcamps,
    deleteBootcamps
} = require("../controller/bootcamps");
router.route("/").get(getBootcamps).post(postBootcamps);
router
    .route('/:id')
    .get(getBootcamp)
    .put(putBootcamps)
    .delete(deleteBootcamps);
module.exports = router;
