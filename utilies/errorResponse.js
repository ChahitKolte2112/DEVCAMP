class ErroResponse extends Error {
    constructor(message, statusCode) {
        // console.log("errorresponse");
        console.log(message);
        super(message);
        this.statusCode = statusCode;
    }
}
module.exports = ErroResponse;
