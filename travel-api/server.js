const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/travelDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define Schema for Travel Places
const placeSchema = new mongoose.Schema({
    name: String,
    location: String,
    description: String,
    image: String,
});

// Create Model
const Place = mongoose.model("Place", placeSchema);

// API Routes

// 1. Home Route
app.get("/", (req, res) => {
    res.send("Welcome to the Travel API!");
});

// 2. Add a New Place
app.post("/places", async (req, res) => {
    const newPlace = new Place(req.body);
    await newPlace.save();
    res.json(newPlace);
});

// 3. Get All Places
app.get("/places", async (req, res) => {
    const places = await Place.find();
    res.json(places);
});

// 4. Get a Specific Place by ID
app.get("/places/:id", async (req, res) => {
    const place = await Place.findById(req.params.id);
    res.json(place);
});

// 5. Delete a Place
app.delete("/places/:id", async (req, res) => {
    await Place.findByIdAndDelete(req.params.id);
    res.json({ message: "Place Deleted" });
});

// Start the Server
app.listen(3000, () => {
    console.log("API is running on http://localhost:3000");
});
