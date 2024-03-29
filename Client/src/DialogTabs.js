import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function CenteredTabs(props) {
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
			<Tab label={sensor} key={sensor}/>
		  ))};
      </Tabs>
  );
}