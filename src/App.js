import './App.css';
import ImgMediaCard from "./Card.js";
import ButtonAppBar from "./ButtonAppBar.js";
import React from 'react';
import Dialog from "./Dialog";
import {getData} from "./Utilities";
import { DialogContent } from '@material-ui/core';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from "recharts";

let data = getData();
let rooms = [];
const roomData = [{"name": "06:00", "Temperature": 23}, {"name":"07:00", "Temperature": 26}, {"name":"08:00", "Temperature": 21}, {"name":"09:00", "Temperature": 16},{"name":"10:00", "Temperature": 30}];
for(let room in data){rooms.push(room)}


function App() {
	
	const [roomAttributes, setRoomAttributes] = React.useState(data);
	const [openRoom, setOpenRoom] = React.useState("");	

	const handleOpen = (room) => {
		console.log(room);

		setOpenRoom(room);
	};
  
	const handleClose = () => {
		//for loop that closes all rooms
		setOpenRoom("");
	};

  	return (
	  <div>
		<ButtonAppBar page="Home"/>
		<div className="App">
			<div className="grid">
				{rooms.map(room => (
					<div className="room">
						<div type="button" onClick={() => handleOpen(room)}>
							<ImgMediaCard 
								alt={capitaliseAllWords(room,"_")}
								component="img" 
								image={room + ".png"}
								title={capitaliseAllWords(room,"_")}
								heading={capitaliseAllWords(room,"_")}
								temp={roomAttributes[room].attributes.temperature}
								humid={roomAttributes[room].attributes.humidity}
								light={roomAttributes[room].attributes.light}
								noise={roomAttributes[room].attributes.noise}
							/>
						</div>
						<Dialog handleClose={handleClose} handleOpen={openRoom === room} maxWidth="lg" title={capitaliseAllWords(room,"_")}>
							<DialogContent>
								<div className="DialogChart">
									<center>
									<LineChart width={800} height={300} data={roomData} margin={{ top: 5, right: 40, bottom: 5, left: 0 }}>
										<Line type="monotone" dataKey="Temperature" stroke="#8884d8" />
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

export default App;
