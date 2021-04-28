import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './App.css';

import CardParameter from "./CardParameter";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

	let sensors = [];
	for(let sensor in props.sensors){
		sensors.push(sensor)
	}

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component={props.component}
          alt={props.alt}
          height={props.height}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.heading}
          </Typography>
			<div className="cardParameters">

				{sensors.map((sensor, room, index) => (
				<CardParameter type={sensor} value={props.sensors[sensor]} key={props.room+ "_" + sensor}/>
				))}

			</div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}