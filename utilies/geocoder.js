const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const NodeGeocoder = require("node-geocoder");

const options = {   
    provider: process.env.GEOCODER_PROVIDER,

    // Optional depending on the providers
    httpAdapter: "https",
    apiKey: process.env.GEOCODER_APIKEY, // for Mapquest, OpenCage, Google Premier
    formatter: null // 'gpx', 'string', ...
}
const geocoder = NodeGeocoder(options);
module.exports = geocoder;
