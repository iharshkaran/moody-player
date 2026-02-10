const mongoose = require("mongoose");
const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';
const initData = require("./data");
const listings = require("../models/listing")


main()
    .then(() => console.log("Connection Successful"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
};

const initDB = () => {
    listings.deleteMany({});
    listings.insertMany(initData.data);
    console.log("Data was initialized");
}

initDB();
