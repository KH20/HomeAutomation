import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}));

const setActiveButton = (event, props) => {
    let button = event.currentTarget;
    let buttonId = button.name;
    let timeScales = buttonId.split(" ");
    console.log(timeScales);

    let buttons = document.querySelectorAll(".MuiButtonGroup-root Button");

    buttons.forEach((button) => {
        button.classList.remove("timeButtonActive");
    });
    button.classList.add("timeButtonActive");

    switch (timeScales[1]) {
        case "m":
            timeScales[1] = "minute";
            break;
        case "D":
            timeScales[1] = "day";
            break;
        case "Custom":
            console.log("CUSTOM");
            return;
        default:
        case "HR":
            timeScales[1] = "hour";
            break;
    }

    props.handleOpenTab(props.room, props.sensor, timeScales[0], timeScales[1]);
};

const timeScales = ["1 HR", "4 HR", "8 HR", "12 HR", "1 D", " Custom"];

export default function BasicButtonGroup(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ButtonGroup
                variant="text"
                color="primary"
                aria-label="text primary button group"
            >
                {timeScales.map((button, index) => (
                    <Button
                        name={button}
                        className={button == "4 HR" ? "timeButtonActive" : ""}
                        onClick={(event) => setActiveButton(event, props)}
                    >
                        {button}
                    </Button>
                ))}
            </ButtonGroup>
        </div>
    );
}
