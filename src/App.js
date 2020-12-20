import './App.css';
import ImgMediaCard from "./Card.js";
import ButtonAppBar from "./ButtonAppBar.js";
import React from 'react';
import Dialog from "./Dialog";
import {getData} from "./Utilities";

let startup = 0;
function App() {
	const [openLivingRoom, setOpenLivingRoom] = React.useState(false);
	const [openKitchen, setOpenKitchen] = React.useState(false);
	const [openOffice, setOpenOffice] = React.useState(false);
	const [openBedroom, setOpenBedroom] = React.useState(false);
	const [roomAttributes, setRoomAttributes] = React.useState(null);
	
	async function initialiseData() {
		let data = await getData();
		setRoomAttributes(data);
		startup = 1;
	}

	//Initialises the state data with the JSON/database data.
	if(!startup)
		initialiseData();

	const handleOpen = (room) => {

		switch(room){
			case "livingroom":
				setOpenLivingRoom(true);
				setOpenKitchen(false);
				setOpenOffice(false);
				setOpenBedroom(false);
				return;
			case "kitchen":
				setOpenKitchen(true);
				setOpenLivingRoom(false);
				setOpenOffice(false);
				setOpenBedroom(false);
				return;
			case "office":
				setOpenKitchen(false);
				setOpenLivingRoom(false);
				setOpenOffice(true);
				setOpenBedroom(false);
				return;
			case "bedroom":
				setOpenKitchen(false);
				setOpenLivingRoom(false);
				setOpenOffice(false);
				setOpenBedroom(true);
				return;
			default:
				handleClose();
				return;
		}
	};
  
	const handleClose = () => {
	  setOpenLivingRoom(false);
	  setOpenKitchen(false);
	  setOpenOffice(false);
	  setOpenBedroom(false);
	};

  return (
	  <div>
		<ButtonAppBar page="Home"/>
		<div className="App">
			<div className="grid">
				<div className="room">
					<div type="button" onClick={() => handleOpen("livingroom")}>
						<ImgMediaCard 
							alt="Living Room" 
							component="img" 
							image="lr.png" 
							title="Living Room" 
							heading="Living Room" 
							temp={roomAttributes.livingroom.attributes.temperature}
							humid={roomAttributes.livingroom.attributes.humidity}
							light={roomAttributes.livingroom.attributes.light}
							noise={roomAttributes.livingroom.attributes.noise}
							/>
					</div>
					<Dialog handleClose={handleClose} handleOpen={openLivingRoom} maxWidth="lg" title="Living Room" body="Test"/>
				</div>

				<div className="room">
					<div type="button" onClick={() => handleOpen("kitchen")}>
						<ImgMediaCard 
							alt="Kitchen" 
							component="img" 
							image="kitchen.png" 
							title="Kitchen" 
							heading="Kitchen" 
							temp={roomAttributes.kitchen.attributes.temperature}
							humid={roomAttributes.kitchen.attributes.humidity}
							light={roomAttributes.kitchen.attributes.light}
							noise={roomAttributes.kitchen.attributes.noise}
							/>
					</div>
					<Dialog handleClose={handleClose} handleOpen={openKitchen} maxWidth="lg" title="Kitchen" body="Test"/>
				</div>

				<div className="room">
					<div type="button" onClick={() => handleOpen("office")}>
						<ImgMediaCard 
							alt="Office" 
							component="img" 
							image="office.png" 
							title="Office" 
							heading="Office" 
							temp={roomAttributes.office.attributes.temperature}
							humid={roomAttributes.office.attributes.humidity}
							light={roomAttributes.office.attributes.light}
							noise={roomAttributes.office.attributes.noise}
							/>
					</div>
					<Dialog handleClose={handleClose} handleOpen={openOffice} maxWidth="lg" title="Office" body="Test"/>
				</div>

				<div className="room">
					<div type="button" onClick={() => handleOpen("bedroom")}>
						<ImgMediaCard 
							alt="Bedroom" 
							component="img" 
							image="bedroom.png" 
							title="Bedroom" 
							heading="Bedroom" 
							temp={roomAttributes.bedroom.attributes.temperature}
							humid={roomAttributes.bedroom.attributes.humidity}
							light={roomAttributes.bedroom.attributes.light}
							noise={roomAttributes.bedroom.attributes.noise}
							/>
					</div>
					<Dialog handleClose={handleClose} handleOpen={openBedroom} maxWidth="lg" title="Bedroom" body="Test"/>
				</div>
			</div>
			{/* <Details test="Temperature"/> */}
	  </div>
	</div>
    
  );
}

export default App;
