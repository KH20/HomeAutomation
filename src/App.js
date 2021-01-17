import './App.css';
import ImgMediaCard from "./Card.js";
import ButtonAppBar from "./ButtonAppBar.js";
import React from 'react';
import Dialog from "./Dialog";
import DialogTabs from "./DialogTabs";
import {getData} from "./Utilities";
import { DialogContent } from '@material-ui/core';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from "recharts";

let data = getData();
let rooms = [];
let sensorDataArray = [];
const roomData = {
	"living_room" : [
		{"name": "06:00", "Temperature": 23, "Humidity": 30, "Light": 100, "Noise": 34}, {"name":"07:00", "Temperature": 26, "Humidity": 28, "Light": 100, "Noise": 30}, {"name":"08:00", "Temperature": 21, "Humidity": 25, "Light": 0, "Noise": 0}, {"name":"09:00", "Temperature": 16, "Humidity": 34, "Light":0, "Noise": 100},{"name":"10:00", "Temperature": 30, "Humidity": 27, "Light":0, "Noise": 0}],
	"bedroom" : [
		{"name": "06:00", "Temperature": 13}, {"name":"07:00", "Temperature": 14}, {"name":"08:00", "Temperature": 14}, {"name":"09:00", "Temperature": 14},{"name":"10:00", "Temperature": 11}]
};


for(let room in data){rooms.push(room)}

function App() {
	
	const [roomAttributes, setRoomAttributes] = React.useState(data);
	const [openRoom, setOpenRoom] = React.useState("");	
	const [openTab, setOpenTab] = React.useState("Temperature");

	const handleOpen = (room,attribute) => {
		setOpenRoom(room);
	};
  
	const handleClose = () => {
		//for loop that closes all rooms
		setOpenRoom("");
		setOpenTab("Temperature");	//reset to default
	};

	const handleOpenTab = (attribute) => {
		setOpenTab(attribute);
		
	}

  	return (
	  <div>
		<ButtonAppBar page="Home"/>
		<div className="App">
			<div className="grid">
				{rooms.map((room, index) => (
					<div className="room">
						<div type="button" onClick={() => handleOpen(room)}>
							<ImgMediaCard 
								alt={capitaliseAllWords(room,"_")}
								component="img" 
								image={mediaExistsForRoom(roomAttributes, room)}
								title={capitaliseAllWords(room,"_")}
								heading={capitaliseAllWords(room,"_")}
								sensors={roomAttributes[room].attributes}
							/>
						</div>

						<Dialog handleClose={handleClose} handleOpen={openRoom === room} maxWidth="lg" title={capitaliseAllWords(room,"_")}>
							<DialogContent>
								<DialogTabs sensors={roomAttributes[room].attributes} onChange={(value) => handleOpenTab(capitaliseAllWords(value,"_"))}/>
								<div className="DialogChart">
									<center>
									<LineChart width={800} height={300} data={roomData[room]} margin={{ top: 5, right: 40, bottom: 5, left: 0 }}>
										<Line type="monotone" dataKey={capitaliseAllWords(openTab, " ")} stroke="#8884d8" strokeWidth="3"/>
										<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
										<XAxis dataKey="name" />
										<YAxis />
										<Tooltip />
									</LineChart>
									</center>
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

function capitaliseAllWords(text, splitter){

	if(text === ""){
		return;
	}

	const words = text.split(splitter);
	let word = "";
	if(words.length > 1){
		for (let i = 0; i < words.length; i++) {
			word += words[i][0].toUpperCase() + words[i].substring(1) + " ";
		}
		return word;
	}
	else{
		text = text[0].toUpperCase() + text.substring(1);
		return text;
	}
}

function mediaExistsForRoom(roomAttributes, room){
	try{
		if(roomAttributes[room].media)
		return (room + ".png");
		else
			return ("house.png");
	}
	catch(err){
		return ("house.png");
	}
}

export default App;
