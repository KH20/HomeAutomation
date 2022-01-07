import React, { useEffect } from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";

export default function Switches(props) {
    const [state, setState] = React.useState(props.buttonState);

    const handleChange = (event, room, sensor) => {
        setState(event.target.checked);
        props.handleControls(room, sensor, !state);
    };

    useEffect(() => {
        //Runs on the first render
        //And any time any dependency value changes
        setState(props.buttonState);
    }, [props.buttonState]);

    return (
        <div>
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Switch
                            checked={state}
                            onClick={(event) =>
                                handleChange(event, props.room, props.sensor)
                            }
                            name={props.control}
                            room={props.room}
                            sensor={props.sensor}
                            inputProps={{ "aria-label": "secondary checkbox" }}
                        />
                    }
                    label={props.control}
                />
            </FormGroup>
        </div>
    );
}
