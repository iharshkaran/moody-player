const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const path = require("path");
const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';


main()
    .then(() => console.log("Connection Successful"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
};

app.get("/", (req, res) => {
    res.send("Hey, Welcome to Root");
});

app.listen(port, () => console.log("Server is listening to port 8080.."));