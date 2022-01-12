const express = require("express");
const req = require("express/lib/request");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const client = "mongodb://192.168.0.29:27017/homeautomation";
const mqtt = require("mqtt");

const options = {
    protocol: "websockets",
    clientId: 2,
};

const sensorSchema = new mongoose.Schema({
    house: String,
    room: String,
    sensor: String,
    value: String,
    date: { type: Date, default: Date.now },
});

const Sensor = mongoose.model("Sensor", sensorSchema);
const mqttClient = mqtt.connect("mqtt://192.168.0.29:1883", options);
mqttClient.subscribe("home/+/+"); //home/room/sensor
// mqttClient.subscribe("feedback/+/+/+"); //feedback/home/room/sensor

mongoose.connect(client, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mqttClient.on("message", function (topic, message) {
    let keys = topic.split("/");
    let home = null;
    let room = null;
    let sensor = null;
    let note = null;

    if (keys[0] === "home") {
        home = keys[0];
        room = keys[1];
        sensor = keys[2];

        const sensorData = new Sensor({
            house: home,
            room: room,
            sensor: sensor,
            value: message,
        });

        sensorData.save().then(() => {
            console.log("Saved");
        });
    }
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

//home/room/sensor/value
// app.post("/api/:home/:room/:sensor/:value", (req, res) => {
//     console.log(req.params);
//     let home = req.params.home;
//     let room = req.params.room;
//     let sensor = req.params.sensor;
//     let value = req.params.value;
//     const sensorData = new Sensor({
//         house: home,
//         room: room,
//         sensor: sensor,
//         value: value,
//     });

//     sensorData.save().then(() => {
//         console.log("Saved");
//     });
//     res.send("Received");
// });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
