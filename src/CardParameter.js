import './App.css';
import Typography from '@material-ui/core/Typography';

function CardParameter(props) {
  return (
    <div className="CardParameters">
		<div className="ParamContainer">
			<Typography variant="body1" color="textSecondary" component="p">
				<div className="sensorData">
					{renderType(props)}
				</div>

			</Typography>
		</div>
    </div>
  );
}

function renderType(props){
	switch(props.type){
		case "temperature":
			return(props.value + "°C");
		case "humidity":
			return(props.value + "%");
		case "light":
			return(props.value + " Lx");
		default:
			return("ERR");

	}
}
export default CardParameter;
