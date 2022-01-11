const Sensors = require("./temp.json");

export const getData = () => {
	let data = Sensors.rooms;
	return data;
}
