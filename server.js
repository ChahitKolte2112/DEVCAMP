const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const bootcamps = require("./routes/bootcamps");
const errorHandler = require("./middleware/error");
const app = express();
const connectDb = require("./config/db");
dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT;

connectDb();
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
app.use(express.json());
// app.use(express.urlencoded());
app.use("/api/v1/bootcamps", bootcamps);

app.use(errorHandler);

app.listen(
    PORT,
    console.log(
        `server is runing in ${process.env.NODE_ENV} mode on port ${PORT}`
            .yellow.bold
    )
);
//Handle unhandle  promise rejections
process.on("unhandleRejection", (err, promise) => {
    // console.log("error handiling wotrking");
    console.log(`Error: ${err.message}`.red.bold);
    //close server and exist the process
    server.close(() => process.exit(1));
});
