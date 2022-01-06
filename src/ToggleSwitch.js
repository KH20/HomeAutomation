import React from "react";
import Switch from "@material-ui/core/Switch";

export default function Switches(props) {
    const [state, setState] = React.useState(false);

    const handleChange = (event) => {
        setState(event.target.checked);
        console.log(!state);
        props.handleLivingRoomLamp(!state);
    };

    return (
        <div>
            <Switch
                checked={state}
                onChange={handleChange}
                name="Lamp"
                inputProps={{ "aria-label": "secondary checkbox" }}
            />
        </div>
    );
}
