import './App.css';
import ImgMediaCard from "./Card.js";
import ButtonAppBar from "./ButtonAppBar.js";
import React from 'react';
import Dialog from "./Dialog";
import {getData} from "./Utilities";


function App() {
	let rooms = [];

	const [roomAttributes, setRoomAttributes] = React.useState(getData());
	for(let room in roomAttributes){rooms.push(room)}
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
						<Dialog handleClose={handleClose} handleOpen={openRoom === room} maxWidth="lg" title={capitaliseAllWords(room,"_")} body="Test"/>
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
