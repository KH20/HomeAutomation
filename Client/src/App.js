import "./App.css";
import ImgMediaCard from "./Card.js";
import ButtonAppBar from "./ButtonAppBar.js";
import React, { useEffect } from "react";
import Dialog from "./Dialog";
import DialogTabs from "./DialogTabs";
import { getData } from "./Utilities";
import { DialogContent, Typography } from "@material-ui/core";
import ToggleSwitch from "./ToggleSwitch";
import dayjs from "dayjs";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";
import mqtt from "mqtt";

let options = {
    protocol: "websockets",
    clientId: 1,
};

let data = getData();
let rooms = [];
// const roomData = {
//     living_room: [
//         { name: "06:00", Temperature: 23, Humidity: 30, Light: 100, Noise: 34 },
//         { name: "07:00", Temperature: 26, Humidity: 28, Light: 100, Noise: 30 },
//         { name: "08:00", Temperature: 21, Humidity: 25, Light: 0, Noise: 0 },
//         { name: "09:00", Temperature: 16, Humidity: 34, Light: 0, Noise: 100 },
//         { name: "10:00", Temperature: 30, Humidity: 27, Light: 0, Noise: 0 },
//     ],
//     bedroom: [
//         { name: "06:00", Temperature: 13 },
//         { name: "07:00", Temperature: 14 },
//         { name: "08:00", Temperature: 14 },
//         { name: "09:00", Temperature: 14 },
//         { name: "10:00", Temperature: 11 },
//     ],
// };

for (let room in data) {
    rooms.push(room);
}

function App() {
    const [roomAttributes, setRoomAttributes] = React.useState(data);
    const [openRoom, setOpenRoom] = React.useState("");
    const [openTab, setOpenTab] = React.useState("Temperature");
    const [newValue, setNewValue] = React.useState(null);
    const [roomData, setRoomData] = React.useState("");

    const client = mqtt.connect("ws://192.168.0.29:9001", options);
    useEffect(() => {
        //Subscribe to all rooms and sensors.
        client.subscribe("home/+/+"); //home/room/sensor
        client.subscribe("feedback/+/+/+"); //feedback/home/room/sensor
        client.on("connect", () => console.log("CONNECTED TO MQTT"));
        client.on("message", function (topic, message) {
            let keys = topic.split("/");
            let home = null;
            let room = null;
            let sensor = null;
            let note = null;
            let temp_data = null;

            if (keys[0] === "home") {
                home = keys[0];
                room = keys[1];
                sensor = keys[2];

                switch (sensor) {
                    case "temperature":
                    case "humidity":
                        note = parseFloat(message);
                        temp_data = roomAttributes;
                        temp_data[room].attributes[sensor] = note;
                        setRoomAttributes({ ...temp_data });
                        break;
                }
            } else if (keys[0] === "feedback") {
                room = keys[2];
                sensor = keys[3];

                note = stringToBool(String.fromCharCode(...message));
                temp_data = roomAttributes;
                temp_data[room].controls[sensor] = note;
                setRoomAttributes({ ...temp_data });
            }
        });
    }, []);

    const handleOpen = async (room) => {
        setOpenRoom(room);
        handleOpenTab(room, "Temperature");
    };

    const handleClose = () => {
        //for loop that closes all rooms
        setOpenRoom("");
        setOpenTab("Temperature"); //reset to default
    };

    const handleOpenTab = async (room, attribute) => {
        room = room.toLowerCase();
        let date = dayjs().format("YYYY-MM-DD[T]HH:mm");
        let timeStart = dayjs()
            .subtract(4, "hour")
            .format("YYYY-MM-DD[T]HH:mm");

        let uri =
            "http://localhost:5000/api/home/" +
            room +
            "/" +
            attribute.toLowerCase() +
            "/" +
            timeStart +
            ":00/" +
            date +
            ":00";

        let response = await fetch(uri, { method: "GET" });
        if (response.ok) {
            const data = await response.json();

            let roomDat = JSON.parse(`{ "${room}": [] }`);

            data.map((record) => {
                let time = dayjs(record.date);
                let hour = time.get("hour");
                let min = time.get("minute");
                let dat = JSON.parse(
                    `{"name": "${hour}:${min}", "${attribute}":"${record.value}"}`
                );
                roomDat[room].push(dat);
            });

            setRoomData(roomDat);
        }
        setOpenTab(attribute);
    };

    const handleControls = (room, sensor, value) => {
        let val = value.toString();
        client.publish("home/" + room + "/" + sensor, val);
    };

    const stringToBool = (message) => {
        if (message === "true") {
            return true;
        } else if (message === "false") {
            return false;
        } else return null;
    };

    return (
        <div>
            <ButtonAppBar page="Home" />
            <div className="App">
                <div className="grid">
                    {Object.keys(roomAttributes).map((room, index) => (
                        <div className="room" key={room + index}>
                            <div type="button" onClick={() => handleOpen(room)}>
                                <ImgMediaCard
                                    alt={capitaliseAllWords(room, "_")}
                                    component="img"
                                    image={mediaExistsForRoom(
                                        roomAttributes,
                                        room
                                    )}
                                    title={capitaliseAllWords(room, "_")}
                                    heading={capitaliseAllWords(room, "_")}
                                    sensors={roomAttributes[room].attributes}
                                    room={room}
                                    mqttVal={newValue}
                                />
                            </div>

                            <Dialog
                                handleClose={handleClose}
                                handleOpen={openRoom === room}
                                maxWidth="lg"
                                title={capitaliseAllWords(room, "_")}
                            >
                                <DialogContent>
                                    <Typography variant="h6">
                                        Sensors
                                    </Typography>
                                    <DialogTabs
                                        sensors={
                                            roomAttributes[room].attributes
                                        }
                                        onChange={(value) =>
                                            handleOpenTab(
                                                capitaliseAllWords(room),
                                                capitaliseAllWords(value, "_")
                                            )
                                        }
                                    />
                                    <div className="DialogChart">
                                        <center>
                                            <LineChart
                                                width={800}
                                                height={300}
                                                data={roomData[room]}
                                                margin={{
                                                    top: 5,
                                                    right: 40,
                                                    bottom: 5,
                                                    left: 0,
                                                }}
                                            >
                                                <Line
                                                    type="monotone"
                                                    dataKey={capitaliseAllWords(
                                                        openTab,
                                                        " "
                                                    )}
                                                    stroke="#8884d8"
                                                    strokeWidth="3"
                                                />
                                                <CartesianGrid
                                                    stroke="#ccc"
                                                    strokeDasharray="5 5"
                                                />
                                                <XAxis dataKey="name" />
                                                <YAxis />
                                                <Tooltip />
                                            </LineChart>
                                        </center>
                                    </div>
                                </DialogContent>
                                <DialogContent dividers>
                                    <Typography variant="h6">
                                        Controls
                                    </Typography>
                                    <div className="controlSwitches">
                                        {Object.keys(
                                            roomAttributes[room].controls
                                        ).map((control, index) => (
                                            <div>
                                                <ToggleSwitch
                                                    handleControls={
                                                        handleControls
                                                    }
                                                    control={capitaliseAllWords(
                                                        control
                                                    )}
                                                    room={room}
                                                    sensor={control}
                                                    buttonState={
                                                        roomAttributes[room]
                                                            .controls[control]
                                                    }
                                                ></ToggleSwitch>
                                            </div>
                                        ))}
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function capitaliseAllWords(text, splitter) {
    if (text === "") {
        return;
    }

    const words = text.split(splitter);
    let word = "";
    if (words.length > 1) {
        for (let i = 0; i < words.length; i++) {
            word += words[i][0].toUpperCase() + words[i].substring(1) + " ";
        }
        return word;
    } else {
        text = text[0].toUpperCase() + text.substring(1);
        return text;
    }
}

function mediaExistsForRoom(roomAttributes, room) {
    try {
        if (roomAttributes[room].media) return room + ".png";
        else return "house.png";
    } catch (err) {
        return "house.png";
    }
}

export default App;
