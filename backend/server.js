
const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Welcome to EduTrack Backend!");
});

app.listen(PORT, () => {
    console.log(`EduTrack server running on port ${PORT}`);
});
