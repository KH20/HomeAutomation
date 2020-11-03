import logo from './logo.svg';
import './App.css';
import ImgMediaCard from "./Card.js";

function App() {
  return (
    <div className="App">
		<div className="grid">
			<ImgMediaCard 
				alt="Living Room" 
				component="img" 
				height="140" 
				image="lr.png" 
				title="Living Room" 
				heading="Living Room" 
				temp="23"
				humid="40"
				light="100" 
				noise="10"
				/>
			<ImgMediaCard 
				alt="Kitchen" 
				component="img" 
				height="140" 
				image="kitchen.png" 
				title="Kitchen" 
				heading="Kitchen" 
				temp="19"
				humid="64"
				light="476"
				noise="12"
				/>
			<ImgMediaCard 
				alt="Office" 
				component="img" 
				height="140" 
				image="office.png" 
				title="Office" 
				heading="Office" 
				temp="22"
				humid="36"
				light="250"
				noise="40"
				/>
			<ImgMediaCard 
				alt="Bedroom" 
				component="img" 
				height="140" 
				image="bedroom.png" 
				title="Bedroom" 
				heading="Bedroom" 
				temp="20"
				humid="32"
				light="10"
				noise="1"
				/>
		</div>

    </div>
  );
}

export default App;
