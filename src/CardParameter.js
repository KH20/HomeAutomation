import './App.css';
import Typography from '@material-ui/core/Typography';

function CardParameter(props) {
  return (
    <div className="CardParameters">
		<div className="ParamContainer">
			<Typography variant="body1" color="textSecondary" component="p">
				{renderType(props)}
			</Typography>
		</div>
    </div>
  );
}
function renderType(props){
	switch(props.type){
		case "temperature":
			return(<div><svg height="40" viewBox="0 0 128 128" width="40" xmlns="http://www.w3.org/2000/svg"><g id="icon"><path d="m66.712 74.06v-61.5a11.56 11.56 0 0 0 -11.56-11.56 11.56 11.56 0 0 0 -11.56 11.559v61.5a27.743 27.743 0 1 0 23.12 0z" fill="#dbe2eb"/><path d="m55.152 120.322q-.59 0-1.185-.033a21.349 21.349 0 0 1 -19.879-20.806 21.1 21.1 0 0 1 12.293-19.354l3.89-1.788v-65.782a4.881 4.881 0 1 1 9.762 0v65.782l3.89 1.788a21.052 21.052 0 0 1 -8.771 40.193z" fill="#ef5361"/><path d="m76.215 99.255a21.074 21.074 0 0 1 -21.06 21.07c-.4 0-.79-.011-1.191-.033a20.928 20.928 0 0 1 -13.757-6.345 20.138 20.138 0 0 0 7.78 2.026c.39.022.79.033 1.18.033a21.04 21.04 0 0 0 15.115-35.706 21.119 21.119 0 0 1 11.933 18.955z" fill="#da2a47"/><g fill="#2f3a5a"><path d="m55.169 128c-.537 0-1.076-.014-1.618-.045a28.728 28.728 0 0 1 -10.959-54.527v-60.869a12.56 12.56 0 0 1 25.119 0v60.869a28.823 28.823 0 0 1 16.189 25.828 28.746 28.746 0 0 1 -28.731 28.744zm-.017-126a10.571 10.571 0 0 0 -10.56 10.559v61.5a1 1 0 0 1 -.582.908 26.733 26.733 0 1 0 29.529 43.707 26.5 26.5 0 0 0 8.361-19.418 26.82 26.82 0 0 0 -15.6-24.287 1 1 0 0 1 -.583-.908v-61.5a10.571 10.571 0 0 0 -10.565-10.561z"/><path d="m55.152 121.322q-.615 0-1.238-.034a22.363 22.363 0 0 1 -20.826-21.788 22.1 22.1 0 0 1 12.876-20.279l3.307-1.52v-65.142a5.881 5.881 0 1 1 11.762 0v65.141l3.307 1.52a22.052 22.052 0 0 1 -9.188 42.1zm0-112.644a3.885 3.885 0 0 0 -3.881 3.881v65.782a1 1 0 0 1 -.583.908l-3.888 1.788a20.1 20.1 0 0 0 -11.712 18.436 20.334 20.334 0 0 0 18.933 19.818 20.052 20.052 0 0 0 9.484-38.254l-3.889-1.788a1 1 0 0 1 -.583-.908v-65.782a3.885 3.885 0 0 0 -3.881-3.881z"/><path d="m81.886 66.666h-9.275a1 1 0 1 1 0-2h9.275a1 1 0 0 1 0 2z"/><path d="m78.9 58.026h-6.289a1 1 0 0 1 0-2h6.289a1 1 0 0 1 0 2z"/><path d="m81.886 50.04h-9.275a1 1 0 0 1 0-2h9.275a1 1 0 0 1 0 2z"/><path d="m78.9 41.4h-6.289a1 1 0 0 1 0-2h6.289a1 1 0 0 1 0 2z"/><path d="m81.886 33.414h-9.275a1 1 0 0 1 0-2h9.275a1 1 0 0 1 0 2z"/><path d="m78.9 24.773h-6.289a1 1 0 0 1 0-2h6.289a1 1 0 0 1 0 2z"/><path d="m81.886 16.787h-9.275a1 1 0 0 1 0-2h9.275a1 1 0 1 1 0 2z"/></g></g></svg>
					<div className="sensorData">{props.value + "°C"}</div></div>);
		case "humidity":
			return(
			<div>
				<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						viewBox="0 0 511.448 511.448" xmlspace="preserve" height="40" width="40">
					<path style={{fill:"#2196F3"}} d="M344.556,112.216C318.38,78.84,291.34,44.344,269.516,7.32c-5.76-9.76-21.824-9.76-27.552,0
						c-21.856,37.024-48.896,71.52-75.072,104.896c-53.056,67.68-103.168,131.616-103.168,207.232c0,105.888,86.112,192,192,192
						s192-86.112,192-192C447.724,243.832,397.612,179.896,344.556,112.216z"/>
					<g>
						<path style={{fill:"#FAFAFA"}} d="M207.724,287.448c-26.464,0-48-21.536-48-48s21.536-48,48-48s48,21.536,48,48
							S234.188,287.448,207.724,287.448z M207.724,223.448c-8.832,0-16,7.168-16,16s7.168,16,16,16s16-7.168,16-16
							S216.556,223.448,207.724,223.448z"/>
						<path style={{fill:"#FAFAFA"}} d="M303.724,447.448c-26.464,0-48-21.536-48-48s21.536-48,48-48s48,21.536,48,48
							S330.188,447.448,303.724,447.448z M303.724,383.448c-8.8,0-16,7.2-16,16s7.2,16,16,16s16-7.2,16-16
							S312.524,383.448,303.724,383.448z"/>
						<path style={{fill:"#FAFAFA"}} d="M175.724,415.448c-4.096,0-8.192-1.568-11.328-4.672c-6.24-6.24-6.24-16.384,0-22.624l160-160
							c6.24-6.24,16.384-6.24,22.624,0s6.24,16.384,0,22.624l-160,160C183.916,413.88,179.82,415.448,175.724,415.448z"/>
					</g>
				</svg>

			<div className="sensorData">{props.value + "%"}</div></div>);
		case "light":
			return(
			<div>
				<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
					viewBox="0 0 512 512" xmlspace="preserve" height="40" width="40">
					<path style={{fill:"#455A64"}} d="M300.379,18.219l-8.853-8.853C285.512,3.392,277.388,0.027,268.912,0H243.91
						c-8.483,0.022-16.616,3.387-22.635,9.365l-8.832,8.853c-5.973,6.013-9.338,14.137-9.365,22.613v65.835h106.667V40.832
						C309.717,32.356,306.352,24.232,300.379,18.219z"/>
					<g>
						<path style={{fill:"#FFE082"}} d="M256.411,426.667c-5.891,0-10.667,4.776-10.667,10.667v64c0,5.891,4.776,10.667,10.667,10.667
							c5.891,0,10.667-4.776,10.667-10.667v-64C267.078,431.442,262.302,426.667,256.411,426.667z"/>
						<path style={{fill:"#FFE082"}} d="M176.411,405.333c-5.102-2.945-11.625-1.198-14.571,3.904l-32,55.467
							c-3.16,4.972-1.692,11.564,3.279,14.724s11.564,1.692,14.724-3.279c0.161-0.253,0.311-0.513,0.45-0.778l32-55.467
							C183.243,414.808,181.505,408.286,176.411,405.333z"/>
						<path style={{fill:"#FFE082"}} d="M103.28,342.763l-55.467,32c-5.22,2.731-7.238,9.176-4.507,14.396s9.176,7.238,14.396,4.507
							c0.266-0.139,0.525-0.289,0.778-0.45l55.467-32c4.972-3.16,6.44-9.753,3.279-14.724
							C114.253,341.814,108.192,340.193,103.28,342.763z"/>
						<path style={{fill:"#FFE082"}} d="M350.982,409.131c-3.16-4.972-9.753-6.44-14.724-3.279c-4.678,2.974-6.298,9.034-3.729,13.946
							l32,55.467c2.731,5.22,9.176,7.238,14.396,4.507c5.22-2.731,7.238-9.176,4.507-14.396c-0.139-0.266-0.289-0.525-0.45-0.778
							L350.982,409.131z"/>
						<path style={{fill:"#FFE082"}} d="M464.966,374.763l-55.467-32c-4.971-3.16-11.564-1.692-14.724,3.279
							c-3.16,4.972-1.692,11.564,3.279,14.724c0.253,0.161,0.513,0.311,0.778,0.45l55.467,32c5.22,2.731,11.665,0.713,14.396-4.507
							C471.264,383.797,469.643,377.736,464.966,374.763z"/>
					</g>
					<path style={{fill:"#FFC107"}} d="M346.48,170.219c-1.245-0.929-2.109-2.278-2.432-3.797c-4.267-22.165-15.701-81.067-51.072-81.067
						h-73.131c-35.456,0-46.805,59.029-51.2,81.28c-0.355,1.454-1.208,2.737-2.411,3.627c-56.031,45.01-64.966,126.92-19.956,182.951
						c3.391,4.221,7.042,8.227,10.932,11.993c26.446,25.987,62.124,40.419,99.2,40.128h2.304c37.784-0.746,73.691-16.606,99.691-44.032
						c24.553-25.265,37.789-59.422,36.672-94.635C393.34,229.067,375.665,193.989,346.48,170.219z"/>
					<g>
					</g>
				</svg>
				<div className="sensorData">{props.value + " Lx"}</div></div>);

			case "noise":
				return(
					<div>
						<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							width="35" height="40" viewBox="0 0 93.038 93.038"
							xmlspace="preserve">
						<g>
							<path d="M46.547,75.521c0,1.639-0.947,3.128-2.429,3.823c-0.573,0.271-1.187,0.402-1.797,0.402c-0.966,0-1.923-0.332-2.696-0.973
								l-23.098-19.14H4.225C1.892,59.635,0,57.742,0,55.409V38.576c0-2.334,1.892-4.226,4.225-4.226h12.303l23.098-19.14
								c1.262-1.046,3.012-1.269,4.493-0.569c1.481,0.695,2.429,2.185,2.429,3.823L46.547,75.521L46.547,75.521z M62.784,68.919
								c-0.103,0.007-0.202,0.011-0.304,0.011c-1.116,0-2.192-0.441-2.987-1.237l-0.565-0.567c-1.482-1.479-1.656-3.822-0.408-5.504
								c3.164-4.266,4.834-9.323,4.834-14.628c0-5.706-1.896-11.058-5.484-15.478c-1.366-1.68-1.24-4.12,0.291-5.65l0.564-0.565
								c0.844-0.844,1.975-1.304,3.199-1.231c1.192,0.06,2.305,0.621,3.061,1.545c4.977,6.09,7.606,13.484,7.606,21.38
								c0,7.354-2.325,14.354-6.725,20.24C65.131,68.216,64.007,68.832,62.784,68.919z M80.252,81.976
								c-0.764,0.903-1.869,1.445-3.052,1.495c-0.058,0.002-0.117,0.004-0.177,0.004c-1.119,0-2.193-0.442-2.988-1.237l-0.555-0.555
								c-1.551-1.55-1.656-4.029-0.246-5.707c6.814-8.104,10.568-18.396,10.568-28.982c0-11.011-4.019-21.611-11.314-29.847
								c-1.479-1.672-1.404-4.203,0.17-5.783l0.554-0.555c0.822-0.826,1.89-1.281,3.115-1.242c1.163,0.033,2.263,0.547,3.036,1.417
								c8.818,9.928,13.675,22.718,13.675,36.01C93.04,59.783,88.499,72.207,80.252,81.976z"/>
						</g>
						</svg>
						<div className="sensorData">{props.value + " db"}</div>
					</div>
				);
		default:
			return("ERR");

	}
}
export default CardParameter;
