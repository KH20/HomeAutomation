import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);


  const handleChange = (event, newValue) => {
	setValue(newValue);
	props.onChange(event.currentTarget.textContent)
  };
  
  let sensors = [];
  for(let sensor in props.sensors){
	  sensors.push(sensor);
  }

  return (
      <Tabs
        value={value}
        onChange={(event, value) => handleChange(event, value)}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
		  {sensors.map(sensor => (
			<Tab label={sensor} />
		  ))};
      </Tabs>
  );
}