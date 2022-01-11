import React from 'react';
import Slider from "./Slider.js";
import './App.css';



function Details(props) {
  return (
	  <div>
            <div className="Details">
                {props.test} <Slider />
            </div>
	  </div> 
  );
}

export default Details;
