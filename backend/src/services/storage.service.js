const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const mongoose = require("mongoose");

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadFile(file) {

  const ikFile = await toFile(
    file.buffer,
    `${new mongoose.Types.ObjectId()}.mp3`
  );

  const result = await imagekit.files.upload({
    file: ikFile,
    fileName: ikFile.name,
    folder: "/songs",
  });

  return result;
}

module.exports = uploadFile;