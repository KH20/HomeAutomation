import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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
				<CardParameter type="temperature" value={props.temp}/>
				<CardParameter type="humidity" value={props.humid}/>
				<CardParameter type="light" value={props.light}/>
				<CardParameter type="noise" value={props.noise}/>
			</div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}