const express = require("express");
const multer = require("multer");
const uploadFile = require("../services/storage.service");
const router = express.Router();
const Song = require("../models/song.model");



const upload = multer({ storage: multer.memoryStorage() });


router.post('/songs', upload.single('audio'), async (req, res) => {

    try {
        const result = await uploadFile(req.file);
        Song.create({
            title: req.body.title,
            artist: req.body.artist,
            audio: result.url,
            mood: req.body.mood
        });

        res.status(201).json({
            message: "Upload Successful",
        });

    } catch(err){
        console.log(err);
        res.status(500).json({
            message: "Upload Failed",
        });
    }
});

router.get('/songs', async (req, res) => {
    try {
        const songs = await Song.find({
            mood: req.query.mood
        });
        res.status(200).json({
            message: "Songs fetched successfully",
            data: songs
        });
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Failed to fetch songs",
        });
    }
});

module.exports = router;