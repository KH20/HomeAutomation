const express = require("express");
const req = require("express/lib/request");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const client = "mongodb://192.168.0.29:27017/homeautomation";

const sensorSchema = new mongoose.Schema({
    house: String,
    room: String,
    sensor: String,
    value: String,
    date: { type: Date, default: Date.now },
});

const Sensor = mongoose.model("Sensor", sensorSchema);

mongoose.connect(client, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

//home/room/sensor/value
app.post("/api/:home/:room/:sensor/:value", (req, res) => {
    console.log(req.params);
    let home = req.params.home;
    let room = req.params.room;
    let sensor = req.params.sensor;
    let value = req.params.value;
    const sensorData = new Sensor({
        house: home,
        room: room,
        sensor: sensor,
        value: value,
    });

    sensorData.save();
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
