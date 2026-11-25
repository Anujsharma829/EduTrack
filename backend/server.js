const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/Student");

const app = express();

app.use(express.json());

const PORT = 5000;

// GET API
app.get("/", (req, res) => {
    res.send("Welcome to EduTrack Backend!");
});
// GET all students
app.get("/students", async (req, res) => {

    const students = await Student.find();

    res.json(students);

});

// POST API
app.post("/students",async (req, res) => {
    const student = new Student(req.body);
    await student.save();

    res.json(student);
});

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/edutrack")

.then(() => {
    console.log("MongoDB connected successfully!");

    // Start server after database connection
    app.listen(PORT, () => {
        console.log(`EduTrack server running on port ${PORT}`);
    });
})

.catch((error) => {
    console.log("MongoDB Connection Error:", error);
});