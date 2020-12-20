import './App.css';
import ImgMediaCard from "./Card.js";
import ButtonAppBar from "./ButtonAppBar.js";
import React from 'react';
import Dialog from "./Dialog";

function App() {
	const [openLivingRoom, setOpenLivingRoom] = React.useState(false);
	const [openKitchen, setOpenKitchen] = React.useState(false);
	const [openOffice, setOpenOffice] = React.useState(false);
	const [openBedroom, setOpenBedroom] = React.useState(false);
  
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
							temp="23"
							humid="40"
							light="100" 
							noise="10"
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
							temp="19"
							humid="64"
							light="476"
							noise="12"
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
							temp="22"
							humid="36"
							light="250"
							noise="40"
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
							temp="20"
							humid="32"
							light="10"
							noise="1"
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
