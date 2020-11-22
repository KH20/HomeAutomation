import './App.css';
import ImgMediaCard from "./Card.js";
import ButtonAppBar from "./ButtonAppBar.js";
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support


const Fade = React.forwardRef(function Fade(props, ref) {
	const { in: open, children, onEnter, onExited, ...other } = props;
	const style = useSpring({
	  from: { opacity: 0 },
	  to: { opacity: open ? 1 : 0 },
	  onStart: () => {
		if (open && onEnter) {
		  onEnter();
		}
	  },
	  onRest: () => {
		if (!open && onExited) {
		  onExited();
		}
	  },
	});
  
	return (
	  <animated.div ref={ref} style={style} {...other}>
		{children}
	  </animated.div>
	);
  });

const useStyles = makeStyles((theme) => ({
	modal: {
	  display: 'flex',
	  alignItems: 'center',
	  justifyContent: 'center',
	},
	paper: {
	  backgroundColor: theme.palette.background.paper,
	  border: '2px solid #000',
	  boxShadow: theme.shadows[5],
	  padding: theme.spacing(2, 4, 3),
	  width: "800px",
	  textAlign: "center"
	},
  }));

Fade.propTypes = {
children: PropTypes.element,
in: PropTypes.bool.isRequired,
onEnter: PropTypes.func,
onExited: PropTypes.func,
};

function App() {

	const classes = useStyles();
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
				<Modal
					aria-labelledby="spring-modal-title"
					aria-describedby="spring-modal-description"
					className={classes.modal}
					open={openLivingRoom}
					onClose={handleClose}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
					timeout: 500,
					}}
				>
					<Fade in={openLivingRoom}>
						<div className={classes.paper}>
							<h2 id="spring-modal-title">Living Room</h2>
							<p id="spring-modal-description">Temperature</p>
							<p id="spring-modal-description">Humidity</p>
							<p id="spring-modal-description">Light</p>
							<p id="spring-modal-description">Noise</p>
						</div>
					</Fade>
				</Modal>
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
				<Modal
					aria-labelledby="spring-modal-title"
					aria-describedby="spring-modal-description"
					className={classes.modal}
					open={openKitchen}
					onClose={handleClose}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
					timeout: 500,
					}}
				>
					<Fade in={openKitchen}>
						<div className={classes.paper}>
							<h2 id="spring-modal-title">Kitchen</h2>
							<p id="spring-modal-description">Temperature</p>
							<p id="spring-modal-description">Humidity</p>
							<p id="spring-modal-description">Light</p>
							<p id="spring-modal-description">Noise</p>
						</div>
					</Fade>
				</Modal>
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
				<Modal
					aria-labelledby="spring-modal-title"
					aria-describedby="spring-modal-description"
					className={classes.modal}
					open={openOffice}
					onClose={handleClose}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
					timeout: 500,
					}}
				>
					<Fade in={openOffice}>
						<div className={classes.paper}>
							<h2 id="spring-modal-title">Office</h2>
							<p id="spring-modal-description">Temperature</p>
							<p id="spring-modal-description">Humidity</p>
							<p id="spring-modal-description">Light</p>
							<p id="spring-modal-description">Noise</p>
						</div>
					</Fade>
				</Modal>
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
				<Modal
					aria-labelledby="spring-modal-title"
					aria-describedby="spring-modal-description"
					className={classes.modal}
					open={openBedroom}
					onClose={handleClose}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
					timeout: 500,
					}}
				>
					<Fade in={openBedroom}>
						<div className={classes.paper}>
							<h2 id="spring-modal-title">Bedroom</h2>
							<p id="spring-modal-description">Temperature</p>
							<p id="spring-modal-description">Humidity</p>
							<p id="spring-modal-description">Light</p>
							<p id="spring-modal-description">Noise</p>
						</div>
					</Fade>
				</Modal>
			</div>
			{/* <Details test="Temperature"/> */}
	  </div>
	</div>
    
  );

  
}



export default App;
